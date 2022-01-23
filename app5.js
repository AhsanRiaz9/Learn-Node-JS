var mysql = require('mysql2');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "ahsan123",
  database: "testdb"
});

con.connect(function(err) {
    if (err) throw err;
    con.query("SELECT * FROM user", function (err, result, fields) {
      if (err) throw err;
      console.log(result);
      // get name and age columns
      for(let i=0;i<result.length;i++)
      {
        console.log(result[i].name + " : " +  result[i].age);
      }
    });
});

