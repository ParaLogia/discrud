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

require 'test_helper'

class MessageTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
