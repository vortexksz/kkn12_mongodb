//Link instalasi:
//mongodb : https://www.mongodb.com/try/download/community (zip)
//mongoshell : https://www.mongodb.com/try/download/shell (zip)
//mongodb compass : https://www.mongodb.com/try/download/compass

//1. nyalakan mongod server
/*
-buka folder mongodb yang sudah di extract dari zip
-masuk kedalam folder bernama bin
-buat folder baru dalam folder bin
-buka terminal lalu arah kan terminal untuk meng akses folder bin (dengan cd dan alamat folder bin tersebut)
-ketik perintah ini pada terminal (mongod --dbpath={nama folder baru yang telah dibuat })
-server berhasil dijalankan
*/

//2. sambungkan compass ke server
/*
-buka aplikasi mongo compass yang sudah didownload lalu next hingga terinstall
-setelah terinstall buat koneksi baru
-jangan merubah default dari mongodb (localhost:27017)
-klik connect
-GUI mongodb bisa di gunakan
*/

//3. gunakan mongoshell untuk membuat data base
/*
-buka folder mongosh yang sudah di extract dari zip
-masuk kedalam folder bernama bin lalu salin alamat folder bin tersebut
-buka terminal lalu ketikan perintah (mongosh "mongodb://localhost:27017")
-terminal mongodb sudah bisa digunakan untuk membuat database
*/

//DATABASE
show databases //menampilkan semua database

use sekolah // memilih database sekolah

use perusahaan // memilih database perusahaan


