var express = require('express');
var app = express();
var bodyParser = require('body-parser');

// Create application/x-www-form-urlencoded parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));
var emp=[{
   empno: "0001",
   empname : "Hari",
   phone : "7765654543",
   address: "Hyderabad",
   dob : "12-06-95",
    ms : "Un-married"
   },{
   empno: "0002",
   empname : "Narsing",
   phone : "9765345643",
   address: "Warangal",
   dob : "30-09-95",
    ms : "Un-married"
   },{
   empno: "0003",
   empname : "Veerendra",
   phone : "9876544543",
   address: "Secunderabad",
   dob : "27-08-95",
    ms : "Un-married"
   }];

 var projects = [
               {
                  value: "java",
                  label: "Java",
                  
               },
               {
                  value: "jquery-ui",
                  label: "jQuery UI",
               },

               {
                  value: "AJAX",
                  label: "AJAX",
               },

               {
                  value: "BOOTSTRAP",
                  label: "Bootstrap",
               },

               {
                  value: "CSharp",
                  label: "CSharp",
               },

               {
                  value: "MongoDB",
                  label: "MongoDB",
               },

               {
                  value: "C#",
                  label: "C#",
               },

               {
                  value: "Backlog",
                  label: "Backlog",
               },

               {
                  value: "Stylesheet",
                  label: "stylesheet",
               },

               {
                  value: "BackTracking",
                  label: "BackTracking",
               },

               {
                  value: "C Programming",
                  label: "C Programming",
               },

               {
                  value: "NoSQL",
                  label: "NoSQL",
               }
];   


app.get('/', function (req, res) {
   res.sendFile( __dirname + "/" + "test2.html" );
})


app.get('/process_post', function (req, res) {
   // Prepare output in JSON format
   
  var term=req.query.name;
 var suggestion=[];
   for (var i=0;i<projects.length;i++)
               {
                   if (~projects[i].label.toLowerCase().indexOf(term))
                    suggestion.push(projects[i]);
               }
               console.log(suggestion);
   
   
 //  console.log(response);
   res.send(JSON.stringify(suggestion));
});

app.get('/employeetable', function (req, res) {
     res.sendFile(__dirname+"/"+"EmployeeTable.html");
});


app.get("/empdetails",function(req,res){
   res.send(JSON.stringify(emp));
});

var server = app.listen(8081);