//insert document
db.customers.insertOne({
    _id: "kumogakure",
    name: "killer bee"
})

db.customers.insertOne({
    name: "bayu"
})

db.customers.insertOne({
    _id: "sunagakure",
    name: "gaara",
    detail: {
        status: "kage",
        bijuu: "one-tails"
    }
})




db.menu_makan.insertMany([
    {
        _id: 001,
        name: "donut",
        price: new NumberLong("5000"),
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
    }
])

db.pesanan.insertOne({
    _id: new ObjectId(),
    total: new NumberLong("70000"),
    items: [
        {
            menu_makan_id: 001,
            price: new NumberLong("5000"),
            quantity: new NumberInt("2")
        },
        {
            menu_makan_id: 004,
            price: new NumberLong("20000"),
            quantity: new NumberInt("3")
        }
    ]

})

db.pesanan.insertOne({
    total: new NumberLong("35000"),
    items: [
        {
            menu_makan_id: 002,
            price: new NumberLong("15000"),
            quantity: new NumberInt("1")
        },
        {
            menu_makan_id: 003,
            price: new NumberLong("10000"),
            quantity: new NumberInt("1")
        }
    ]
})

