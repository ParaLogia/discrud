class CreateServers < ActiveRecord::Migration[5.2]
  def change
    create_table :servers do |t|
      t.integer :owner_id, null: false
      t.string :name, null: false
      t.text :description, null: false
      t.boolean :is_private, null: false, default: false
      t.string :invite_token, null: false

      t.timestamps

      t.index :owner_id
      t.index :invite_token, unique: true
    end
  end
end
