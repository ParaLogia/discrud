# == Schema Information
#
# Table name: channels
#
#  id          :bigint           not null, primary key
#  server_id   :integer          not null
#  name        :string           not null
#  description :text             default(""), not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Channel < ApplicationRecord
  validates :name, presence: true
  validates :description, exclusion: { in: [nil], message: "must not be null" }

  belongs_to :server
end
