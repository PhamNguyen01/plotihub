puts "Seeding maintance..."

Maintenance.create([
    {
        status: "Pending",
        category: "Household",
        short_summary: "Kitchen pipe was brocken",
        description: "Kitchen pipe was brocken due to a mold infestation.",

    },
    {
        status: "Completed",
        category: "Security",
        short_summary: "Block D camera not working.",
        description: "The Block D camera was not working due to storage drives were filled up.",
        
    }
])

puts "Seeding payment..."

Payment.create([
    {
        tenant_name: "Carlton Agesa",
        paid_amount: 10500,
        date: 2/11/2022,
        status: "Paid"
    },
    {
        tenant_name: "Carlton Agesa",
        paid_amount: 10500,
        date: 2/11/2022,
        status: "Paid"
    }
])

puts "Seeding properties..."

Property.create([
    {
        property_name: "Bims Apartments",
        unit_name: "Block D",
        number_of_units: 9,
        city: "Nairobi",
        water_rate: 100, 
        electricity_rate: 120,
        mpesa_paybill: 1223439482
    }, 
    {
        property_name: "Maandamano Apartments",
        unit_name: "Block C",
        number_of_units: 9,
        city: "Nairobi",
        water_rate: 100, 
        electricity_rate: 120,
        mpesa_paybill: 1223439482
    }
])

puts "Seeding tenants..."

Tenant.create([
    {
        tenant_name: "Carlton Agesa",
        phone_number: "0114807073",
        deposit: 10500,
        balance: 0,
        account_number: 233244343
    }, 
    {
        tenant_name: "Laureen Akinyi",
        phone_number: "0714807073",
        deposit: 10500,
        balance: 0,
        account_number: 233244343
    }
])
puts "Seeding users..."

User.create([
    {
        username: "Bonan",
        password_digest: "Bonan1234"
    },
    {
        username: "John Commercials",
        password_digest: "Bonan1234"
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