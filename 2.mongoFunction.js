//database methods
db.getName()//melihat nama database

db.hostInfo()//melihat info host database

db.version()//melihat versi database

db.stats()//melihat statistik database

db.dropDatabase()//menghapus database


//Collection methods
db.getCollectionNames()//menampilkan semua collection dalam database

db.createCollection("name")//membuat collection baru

db.getCollection("name")//mendapatkan object collection

db.getCollectionInfos()//menampilkan info collection


//membuat collection
db.createCollection("customers");

db.createCollection("menu_makan");

db.createCollection("pesanan");


//membuat document
db.<nama collection>.insertOne(document)

db.<nama collection>.insertMany([document1, document2, ...])