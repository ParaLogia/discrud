class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :username,	null: false
      t.integer :tag, null: false
      t.string :email,	null: false
      t.string :password_digest,	null: false
      t.string :session_token,	null: false
      t.string :image_url

      t.timestamps

      t.index [:username, :tag], unique: true
      t.index :email, unique: true
      t.index :session_token, unique: true
    end
  end
end
