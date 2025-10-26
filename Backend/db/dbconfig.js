// const mysql2 = require("mysql2");
// require("dotenv").config();

// // ✅ Use consistent environment variable names
// const dbconnect = mysql2.createPool({
//   host: process.env.DB_HOST,
//   user: process.env.DB_USER,
//   password: process.env.DB_PASSWORD,
//   database: process.env.DB_NAME,
//   port: process.env.DB_PORT || 3306,
//   connectionLimit: 10,
// });

// module.exports = dbconnect.promise();

// // Test connection
// dbconnect.getConnection((err, connection) => {
//   if (err) {
//     console.error("❌ DB connection failed:", err.message);
//   } else {
//     console.log("✅ DB connected successfully!");
//     connection.release();
//   }
// });

const mysql2 = require("mysql2");
require("dotenv").config();

const dbConnection = mysql2.createPool({
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  port: process.env.DB_PORT,
  connectionLimit: 11,
});

module.exports = dbConnection.promise();