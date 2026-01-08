db.<nama collection>.find() //menampilkan semua document dalam collection

db.<nama collection>.find(query) //menampilkan document sesuai kondisi

//contoh query
db.customers.find({_id: "kumogakure"})

db.menu_makanan.find({_id: 005})

db.pesanan.find({total: 40000})


//comparison operator
$eq //equal
$gt //greater than
$gte //greater than equal
$lt //less than
$lte //less than equal
$ne //not equal
$in //value in array 
$nin //value not in array

db.menu_makanan.find({
    price: { $eq: new NumberLong("20000") }
})

db.menu_makanan.find({
    category: {
        $in: ["drink", "snack"]
    }
})

db.menu_makanan.find({
    price: { 
        $gt: new NumberLong("15000") 
    }
})

db.menu_makanan.find({
    category:{
        $ne: "snack"
    }
})

//logic operator
$and //mengganbungkan query jika kondisi bernilai true
$or //mengganbungkan query jika salah satu kondisi bernilai true
$not //mengembalikan kondisi kebalikan
$nor //mengganbungkan query jika semua kondisi bernilai false

db.menu_makanan.find({
    $and: [
        {category: {$in: ["snack"]}},
        {price: {$gt: new NumberLong("10000")}}
    ]
})

db.menu_makanan.find({
    $or: [
        {category: "snack"},
        {price: { $gt: 20000}}
    ]
})

db.menu_makanan.find({
    $nor: [
        {category:  "drink" }
    ]
    
})

//element operator
$exists //mancari dokumen yang memiliki field tersebut
$type //mencari dokumen yang memiki type field tersebut

db.menu_makanan.find({
  category: { $exists: true }
})

db.menu_makanan.find({
  price: { $type: "long" }
})


