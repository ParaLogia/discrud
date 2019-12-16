class RenameChannelDescriptionToTopic < ActiveRecord::Migration[5.2]
  def change
    rename_column :channels, :description, :topic
  end
end
