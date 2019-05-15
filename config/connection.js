// Set up MySQL connection.
var mysql = require("mysql");
var connection;

if(process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL)
} else { 
var connection = mysql.createConnection({
  host: "ryvdxs57afyjk41z.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  port: 3306,
  user: "g8d0a3trwh1j14ze",
  password: "xs0lr5imubls3cwg",
  database: "tqhnzsuj0tzrxw7l"
});
}

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;