# == Schema Information
#
# Table name: servers
#
#  id           :bigint           not null, primary key
#  owner_id     :integer          not null
#  name         :string           not null
#  description  :text             not null
#  is_private   :boolean          default(FALSE), not null
#  invite_token :string           not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

class Server < ApplicationRecord
  validates :name, :description, :invite_token, presence: true
  validates :is_private, inclusion: { in: [ true, false ] }
  validates :invite_token, uniqueness: true
  validate :owner_must_be_member

  belongs_to :owner,
    class_name: :User

  has_many :server_memberships

  has_many :members,
    through: :server_memberships

  after_initialize :ensure_invite_token
  before_create :populate_members_with_owner

  def self.generate_invite_token
    SecureRandom.urlsafe_base64(4)
  end

  private

  def ensure_invite_token
    self.invite_token ||= self.class.generate_invite_token
  end

  def populate_members_with_owner
    self.member_ids = [self.owner_id]
  end

  def owner_must_be_member
    if self.member_ids.exclude?(owner_id)
      errors.add(:owner, 'must be a member of the server')
    end
  end
end
