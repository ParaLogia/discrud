# == Schema Information
#
# Table name: server_memberships
#
#  id         :bigint           not null, primary key
#  server_id  :integer          not null
#  member_id  :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class ServerMembership < ApplicationRecord
  validates :member_id, uniqueness: { scope: :server_id, message: 'already part of the server' }
  validate :server_owner_cannot_become_member

  belongs_to :server
  
  belongs_to :member,
    class_name: :User,
    foreign_key: :member_id

  def server_owner_cannot_become_member
    # Server owners are implicitly members of their own servers, as reflected in the API
    # This allows us to guarantee that a server owner cannot leave their own server
    # Validating when destroying is much harder than validating when creating

    if self.server.owner_id == self.member_id
      errors.add(:server_membership, 'server owner cannot join their own server')
    end
  end
end
