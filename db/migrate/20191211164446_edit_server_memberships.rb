class EditServerMemberships < ActiveRecord::Migration[5.2]
  def change
    rename_column :server_memberships, :user_id, :member_id

    remove_index :server_memberships, :server_id
    add_index :server_memberships, [:server_id, :member_id], unique: true
  end
end
