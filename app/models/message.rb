# == Schema Information
#
# Table name: messages
#
#  id          :bigint           not null, primary key
#  author_id   :integer          not null
#  body        :text             not null
#  thread_type :string           not null
#  thread_id   :bigint           not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Message < ApplicationRecord
  validates :body, presence: true

  belongs_to :author,
    class_name: :User

  belongs_to :thread, 
    polymorphic: true
end