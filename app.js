var express=require('express');
var app=express();
var mysql=require('mysql2');
var bodyparser=require('body-parser');


app.set("view engine","ejs");

app.use(bodyparser.urlencoded({extended:true}));
app.use(express.static(__dirname+"/views"));


var connection=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'Aman@734262',
    database:'joinus'
})

app.get("/aman", function (req, res) {
    var myquery = "select count(*) as count from users";
    var newquery = "select count(email) as googs from users where email like '%gmail%'";
    var yahooquery= "select count(email) as yahoo from users where email like '%yahoo%'";
    var hotmailquery="select count(email) as hots from users where email like '%hot%'";

    // Execute the first query
    connection.query(myquery, function (err, results1) {
        if (err) throw err;

        var count = results1[0].count;

        // Execute the second query inside the callback of the first query
        connection.query(newquery, function (err, results2) {
            if (err) throw err;

            var googs = results2[0].googs;

            //execute the third query inside the callback of the first qurey
            connection.query(yahooquery,function(err,results3){
                if(err) throw err;
                var yahoo =results3[0].yahoo;

                connection.query(hotmailquery,function(err,results4){
                    if(err) throw err;
                    var hots=results4[0].hots;
                




                // Render the response only after both queries are done
            res.render("home",{ data:count, google: googs,yahooemail:yahoo,hotmails:hots});
        });
            });

            
        });
    });
});

app.post("/register",function(req,res){
    var person ={email:req.body.email};

    var insertemail='insert into users set ?';

    connection.query(insertemail,person,function(err,results5){
        if(err) throw err;
       // console.log(results5);
    });
    res.redirect("/aman");
    

});



























app.get("/joke",function(req,res){
    var joke="<strong>What do you call a dog that does magic tricks?</strong> <em> A labracadabra</em>";
    console.log("REQUESTED THE JOKE ROUTE")
    res.send(joke);

});

app.get("/random",function(req,res){
   var num=Math.floor(Math.random()*10)+1;
    res.send("you are lucky "+num);
});



app.listen(8080,function(){
    console.log("app is listening at port 8080");
});

