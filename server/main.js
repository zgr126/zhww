/*
 * Please remember to update the <your_password> placeholder with your actual password.
 * Requires mysql2 package('npm install --save mysql2'). Please check https://www.npmjs.com/package/mysql2 for install guide.
 */

const { timeStamp } = require("console");
var mysql = require("mysql2");

var connection = mysql.createConnection({
  host: "gateway01.ap-northeast-1.prod.aws.tidbcloud.com",
  port: 4000,
  user: "QPgH6pnVHpSM4zq.root",
  password: "HfGzCHaSpyqqB5Uf",
  database: "test",
  ssl: {
    minVersion: "TLSv1.2",
    rejectUnauthorized: true,
  },
});

connection.connect(function (err) {
  if (err) {
    throw err;
  }
  console.time("ss");
  connection.query("SELECT DATABASE();", function (err, rows) {
    if (err) {
      throw err;
    }
    console.log(rows[0]["DATABASE()"]);
    connection.end();
    console.timeEnd("ss");
  });
});
