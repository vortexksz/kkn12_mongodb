//insert document
db.customers.insertOne({
    _id: "kumogakure",
    name: "killer bee"
})


db.menu_makanan.insertMany([
    {
        _id: 001,
        name: "donut",
        price: new NumberLong("10000"),
        category: "snack"
    },
    {
        _id: 002,
        name: "Puding coklat",
        price: new NumberLong("15000"),
        category: "dessert"
    },
    {
        _id: 003,
        name: "cendol",
        price: new NumberLong("10000"),
        category: "drink"
    },
    {
        _id: 004,
        name: "es campur",
        price: new NumberLong("20000"),
        category: "drink"
    },
    {
        _id: 005,
        name: "piscok",
        price: new NumberLong("25000"),
        category: "snack"
    },
    {
        _id: 006,
        name: "ayam pop sejati",
        price: new NumberLong("30000"),
        category: "main course"
    },
    {
        _id: 007,
        name: "nasi goreng sifud",
        price: new NumberLong("35000"),
        category: "main course"
    }
])

db.pesanan.insertOne({
    _id: new ObjectId(),
    total: new NumberLong("80000"),
    items: [
        {
            menu_makanan_id: 001,
            price: new NumberLong("10000"),
            quantity: new NumberInt("2")
        },
        {
            menu_makanan_id: 004,
            price: new NumberLong("20000"),
            quantity: new NumberInt("3")
        }
    ]

})

db.pesanan.insertOne({
    total: new NumberLong("35000"),
    items: [
        {
            menu_makanan_id: 002,
            price: new NumberLong("15000"),
            quantity: new NumberInt("1")
        },
        {
            menu_makanan_id: 003,
            price: new NumberLong("10000"),
            quantity: new NumberInt("1")
        }
    ]
})

db.menu_makanan.insertOne({
    _id: 006,
    name: "ayam pop sejati",
    price: new NumberLong("30000"),
    category: "main course"
})