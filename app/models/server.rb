class Server < ApplicationRecord
  validates :name, :description, :invite_token, presence: true
  validates :is_private, inclusion: { in: [ true, false ] }
  validates :invite_token, uniqueness: true

  belongs_to :owner,
    class_name: :User

  after_initialize :ensure_invite_token

  def self.generate_invite_token
    SecureRandom.urlsafe_base64(4)
  end

  private

  def ensure_invite_token
    self.invite_token ||= self.class.generate_invite_token
  end
end
