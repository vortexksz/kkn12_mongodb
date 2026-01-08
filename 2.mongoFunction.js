//memilih database
show databases //menampilkan semua database

use sekolah // memilih database sekolah

use perusahaan // memilih database perusahaan



//database methods
db.dropDatabase()//menghapus database

db.getName()//melihat nama database

db.hostInfo()//melihat info host database

db.version()//melihat versi database

db.stats()//melihat statistik database


//Collection methods
db.getCollectionNames()//menampilkan semua collection dalam database

db.createCollection()//membuat collection baru

db.getCollectionNames()//mendapatkan object collection

db.getCollectionInfos()//menampilkan info collection


//membuat collection
db.createCollection("customers");

db.createCollection("barang");

db.createCollection("pesanan");


//membuat document
db.<nama collection>.insertOne(document)

db.<nama collection>.insertMany([document1, document2, ...])