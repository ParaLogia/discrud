# == Schema Information
#
# Table name: channels
#
#  id         :bigint           not null, primary key
#  server_id  :integer          not null
#  name       :string           not null
#  topic      :text             default(""), not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Channel < ApplicationRecord
  validates :name, presence: true
  validates :topic, exclusion: { in: [nil], message: "must not be null" }

  belongs_to :server

  has_many :messages, 
    as: :thread

  has_many :contributors, 
    -> { distinct },
    through: :messages,
    source: :author

  def message_ids
    self.messages.order(:created_at).pluck(:id)
  end
end
