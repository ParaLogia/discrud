# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  username        :string           not null
#  tag             :integer          not null
#  email           :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ApplicationRecord
  validates :username, :email, :session_token, :password_digest, presence: true
  validates :email, :session_token, uniqueness: true
  validates :username, uniqueness: { scope: :tag, message: 'combo with tag already taken' }
  validates :username, length: { maximum: 32 }
  validates :tag, presence: { message: 'unavailable for username' }
  validates :password, length: { minimum: 6, allow_nil: true }

  has_many :owned_servers,
    class_name: :Server,
    foreign_key: :owner_id,
    dependent: :destroy

  has_many :owned_channels,
    through: :owned_servers,
    source: :channels

  has_many :owned_channel_messages,
    through: :owned_channels,
    source: :messages

  has_many :server_memberships,
    foreign_key: :member_id,
    dependent: :destroy

  has_many :joined_servers,
    through: :server_memberships,
    source: :server

  has_many :messages,
    foreign_key: :author_id

  after_initialize :ensure_session_token, :ensure_tag

  # Custom association: union of joined_servers and owned_servers
  def servers
    Server.left_outer_joins(:server_memberships)
      .where(
        'member_id = :user_id OR owner_id = :user_id', 
        user_id: self.id
      )
      .distinct
  end

  def channels
    Channel.where(server_id: self.servers.pluck(:id))
  end

  attr_reader :password

  TAG_RANGE = (0000..9999)

  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    user && user.is_password?(password) ? user : nil
  end

  def self.generate_session_token
    SecureRandom.urlsafe_base64(16)
  end

  def self.generate_tag
    rand(TAG_RANGE)
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token!
    self.update(session_token: self.class.generate_session_token)
  end

  private

  def ensure_session_token
    self.session_token ||= self.class.generate_session_token
  end

  def ensure_tag
    return if self.tag
    
    # Generate tag until username/tag combo is not already taken 
    same_name_users = User.select(username: self.username)
    taken_tags = Set.new(same_name_users.pluck(:tag))

    max_tries = 40

    max_tries.times do 
      self.tag = self.class.generate_tag

      # Exit if an available tag is found
      return unless taken_tags.include?(self.tag)
    end
    
    # Find the first sequentially available tag after enough tries
    TAG_RANGE.each do |tag|
      unless taken_tags.include?(self.tag)
        self.tag = tag
        return
      end
    end

    # If no tags are available, force tag presence validation to fail
    self.tag = nil
  end
end
