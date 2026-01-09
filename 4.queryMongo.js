//READ
db.<nama collection>.find() //menampilkan semua document dalam collection

db.<nama collection>.find(query) //menampilkan document sesuai kondisi

//contoh query
db.customers.find({_id: "kumogakure"})

db.menu_makan.find({_id: 005})

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

db.menu_makan.find({
    price: { $eq: new NumberLong("20000") }
})

db.menu_makan.find({
    category: {
        $in: ["drink", "snack"]
    }
})

db.menu_makan.find({
    price: { 
        $gt: new NumberLong("15000") 
    }
})

db.menu_makan.find({
    category:{
        $ne: "snack"
    }
})

//logic operator
$and //mengganbungkan query jika kondisi bernilai true
$or //mengganbungkan query jika salah satu kondisi bernilai true
$not //mengembalikan kondisi kebalikan
$nor //mengganbungkan query jika semua kondisi bernilai false

db.menu_makan.find({
    $and: [
        {category: {$in: ["snack"]}},
        {price: {$gt: new NumberLong("10000")}}
    ]
})

db.menu_makan.find({
    $or: [
        {category: "snack"},
        {price: { $gt: 20000}}
    ]
})

db.menu_makan.find({
    $nor: [
        {category:  "drink" }
    ]
    
})

//element operator
$exists //mancari dokumen yang memiliki field tersebut
$type //mencari dokumen yang memiki type field tersebut

db.menu_makan.find({
  category: { $exists: true }
})

db.menu_makan.find({
  price: { $type: "long" }
})


//UPDATE
db.updateOne() //mengubah 1 dokumen

db.updateMany() //mengubah banyak dokumen

db.replaceOne() //mengubah total 1 dokumen dengan dokumen baru

db.<nama collection>.<updateOne,updateMany,replaceOne>(
    {}, //Filter 
    {}, //Update
    {}  //options
)

//operator
$set //mengubah nilai field di dokumen

$unset //menghapus field di dokumen

$rename //mengganti nama field di dokumen

$inc //menaikan nilai number pada field

$currentDate //mengubah field menjadi waktu realtime


db.menu_makan.updateOne({
    _id: 001
    }, 
    {
    $set: {
        category: "dessert" 
    }
})

db.menu_makan.updateOne(
  { _id: 007 },
  { 
    $set: { 
      price: new NumberLong("40000"),
      is_best_seller: true 
    } 
  }
)


db.menu_makan.updateOne(
    { _id: 005 }, 
    { 
        $unset: { category: "" } 
    }
)


db.menu_makan.updateOne(
    { _id: 003 }, 
    {
        $rename: {"name": "juice"}
    }
)

db.menu_makan.updateMany(
  { category: "snack" }, 
  { 
    $set: { 
      discount: "10%",
      note: "Promo Cemilan"
    } 
  }
)


db.menu_makan.updateMany(
  { category: "drink" },
  { 
    $unset: { price: "" } 
  }
)

db.menu_makan.replaceOne(
    { _id: 007 },
    {
    name: "sifud",
    price: new NumberLong(40000),
    category: "main course",
    tambahan: "nasi"
    }
)


db.menu_makan.updateMany({}, {
    $set: {
        rating: 0
    }
})

db.menu_makan.updateMany({},
    {
        $inc: {
            price: 5000
        }
    }
)

db.menu_makan.updateMany({},
    {
        $currentDate: {
            available: {
                $type: "date"
            }
        }
    }
)

//DELETE
db.<nama collection>.deleteOne(query) //menghapus satu document yang sesuai dengan kondisi query

db.<nama collection>.deleteMany(query) //menghapus banyak dokumen sesuai dengan kondisi query

db.customers.insertOne({
    _id: "ormas",
    name: "putra daerah"
})

db.customers.deleteOne({
    _id: "ormas"
})

