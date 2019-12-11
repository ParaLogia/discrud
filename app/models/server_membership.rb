# == Schema Information
#
# Table name: server_memberships
#
#  id         :bigint           not null, primary key
#  server_id  :integer          not null
#  user_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class ServerMembership < ApplicationRecord
end
