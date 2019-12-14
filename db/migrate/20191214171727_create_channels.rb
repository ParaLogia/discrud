class CreateChannels < ActiveRecord::Migration[5.2]
  def change
    create_table :channels do |t|
      t.integer	:server_id, null: false
      t.string	:name, null: false
      t.text	:description, null: false, default: ''

      t.timestamps

      t.index :server_id
    end
  end
end
