class ChangeMessagesIndexes < ActiveRecord::Migration[5.2]
  def change
    remove_index :messages, :created_at
    remove_index :messages, [:thread_type, :thread_id]
    add_index :messages, [:thread_type, :thread_id, :created_at]
  end
end
