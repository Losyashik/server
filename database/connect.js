import mysql2 from "mysql2";

const conn = mysql2.createConnection({
  host: "",
  database: "testdb",
  user: "root",
  password: "",
});

export default conn;
