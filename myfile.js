// const mysql = require('mysql2');
// const faker=require('faker');

// const connection = mysql.createConnection({
//     host: 'localhost',
//     port: '3306',
//     database: 'joinus',
//     user: 'root',
//     password: 'Aman@734262',
// });

// connection.connect(function(err) {
//     if (err) {
//         console.error('Error connecting: ' + err.stack);
//         return;
//     }
//     console.log('connected as id ' + connection.threadId);
// });


// // for(i=1;i<=3;i++){
// //     let newemail=faker.internet.email();
// //     var myquery='insert into users(email) values (?)';
// // }

// // selecting data
// // var myquery='select count(*)as total from users';


// // connection.query(myquery,function(error, results, fields) {
// //     if (error) throw error;
// //     console.log(results);


    
// //     });


// //inserting data
// var person=[['himanshi@yahoooo.com','2014-05-04 03:44:25'],['aditya@funny.com','2013-01-04 08:47:22'],['rinkiyakmaayi@rajmangal.com','2012-05-04 03:44:25']];

// var myquery='insert into users(email,created_at) values ?';



// connection.query(myquery,[person],function(error, results) {
//     console.log('error   : '+error);
//     console.log('success : '+results);
//  });







// //  var fakeDate=faker.date.past();
// //  var sqlquery='insert into users(email,created_at) values("gambhirban@gmail.com","2024-08-06 04:47:07")'

// //  connection.query(sqlquery,function(err,results,fields){
// //     if(err) throw err;
// //     console.log('inserted at '+ results)
    
// //  })






// connection.end();




























