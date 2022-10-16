# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2022_10_16_075853) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "maintenances", force: :cascade do |t|
    t.string "status"
    t.string "category"
    t.string "short_summary"
    t.string "description"
  end

  create_table "payments", force: :cascade do |t|
    t.string "tenant_name"
    t.integer "paid_amount"
    t.datetime "date"
    t.string "status"
  end

  create_table "properties", force: :cascade do |t|
    t.string "property_name"
    t.string "unit_name"
    t.integer "number_of_units"
    t.string "city"
    t.integer "water_rate"
    t.integer "electricity_rate"
    t.integer "mpesa_paybill"
  end

  create_table "tenants", force: :cascade do |t|
    t.string "tenant_name"
    t.integer "phone_number"
    t.integer "deposit"
    t.integer "balance"
    t.integer "account_number"
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.string "password_digest"
  end

  create_table "utilities", force: :cascade do |t|
    t.string "utility_item"
    t.datetime "date"
  end

end
