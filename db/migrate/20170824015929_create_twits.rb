class CreateTwits < ActiveRecord::Migration[5.1]
  def change
    create_table :twits do |t|
      t.string :user_id, null: false
      t.text :content, null: false
      t.integer :status, null:false, limit: 1, default: 1
      t.timestamps
    end
  end
end
