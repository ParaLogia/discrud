# == Schema Information
#
# Table name: servers
#
#  id           :bigint           not null, primary key
#  owner_id     :integer          not null
#  name         :string           not null
#  is_private   :boolean          default(FALSE), not null
#  invite_token :string           not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

class Server < ApplicationRecord
  validates :name, :invite_token, presence: true
  validates :is_private, inclusion: { in: [ true, false ] }
  validates :invite_token, uniqueness: true

  belongs_to :owner,
    class_name: :User

  has_many :server_memberships,
    dependent: :destroy

  has_many :members,
    through: :server_memberships

  has_many :channels,
    dependent: :destroy

  # Custom association: union of owner and members
  def users
    @users ||= User.left_outer_joins(:server_memberships)
      .where(
        'server_id = :server_id OR users.id = :owner_id',
        server_id: self.id,
        owner_id: self.owner_id
      )
      .distinct
  end

  def user_ids
    users.pluck(:id)
  end

  after_initialize :ensure_invite_token
  after_create :ensure_text_channel

  def self.generate_invite_token
    SecureRandom.urlsafe_base64(4)
  end

  private

  def ensure_invite_token
    self.invite_token ||= self.class.generate_invite_token
  end

  def ensure_text_channel
    self.channels.create(name: 'general')
  end
end
