const { text } = require('body-parser');
const express = require('express');

const pg = require('pg');

const {Client} = require('pg');
const client = new Client({
    host : '192.168.0.116',
    user : 'postgres',
    password : '1234',
    database : 'cqadb',
    port : 5432
}
);

// if(client.connect()){
//     console.log("hello");
// }

// const conString = "postgres://postgres:1234@192.168.0.116:5432/cqadb";
// const client = new pg.Client(conString);

client.connect((err) => {
    if (err) {
      console.log('Database Connection failed');
    } else {
      console.log('Successfully connected to database');
    }
});



//while(true);
client.query("select * from users where id=5",(err,res) => {
    if(err) console.log(err.message);
    else{
        console.log(res.rows);
    }
});
// console.log(res.rows);

// await client.connect();

