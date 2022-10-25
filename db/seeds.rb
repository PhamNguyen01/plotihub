puts "Seeding users..."

User.create([
    {
        username: "admin",
        password: "123"
    },
    {
        username: "John Commercials",
        password: "Bonan1234"
    }
])

puts "Seeding properties..."

Property.create([
    {
        # user_id: 1,
        property_name: "Bims Apartments",
        number_of_units: 20,
        city: "Nairobi",
        water_rate: 100, 
        electricity_rate: 120,
        mpesa_paybill: 1223439482
    }, 
    {
        # user_id: 2,
        property_name: "Maandamano Apartments",
        number_of_units: 10,
        city: "Nairobi",
        water_rate: 100, 
        electricity_rate: 120,
        mpesa_paybill: 1223439482
    }
])

puts "Seeding tenants..."

Tenant.create([
    {
        property_id: 1,
        tenant_name: "Carlton Agesa",
        unit_name: "1",
        phone_number: "0114807073",
        deposit: 10500,
        balance: 0,
        account_number: 233244343
    }, 
    {
        property_id: 2,
        tenant_name: "Laureen Akinyi",
        unit_name: "2",
        phone_number: "0714807073",
        deposit: 10500,
        balance: 0,
        account_number: 233244343
    }
 
])

puts "Seeding payment..."

Payment.create([
    {
        user_id: User.first.id,
        tenant_id: Tenant.first,
        tenant_name: "Carlton Agesa",
        paid_amount: 10500,
        date: 2/11/2022,
        status: "Paid"
    },
    {
        user_id: User.last.id,
        tenant_id: Tenant.last,
        tenant_name: "Carlton Agesa",
        paid_amount: 10500,
        date: 2/11/2022,
        status: "Paid"
    }
])

puts "Seeding maintance..."

Maintenance.create([
    {
        property_id: Property.first,
        tenant_id: Tenant.first,
        status: "Pending",
        category: "Household",
        short_summary: "Kitchen pipe was brocken",
        description: "Kitchen pipe was brocken due to a mold infestation.",

    },
    {
        property_id: Property.last,
        tenant_id: Tenant.last,
        status: "Completed",
        category: "Security",
        short_summary: "Block D camera not working.",
        description: "The Block D camera was not working due to storage drives were filled up.",
        
    }
])

puts "Seeding users..."

Utility.create([
    {
        utility_item: "Toilet Seat",
        date: 1/11/2022
    }
])
puts "That covers all seeding mate!"