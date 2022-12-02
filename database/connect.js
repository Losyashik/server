import mysql2 from "mysql2";

const conn = mysql2.createConnection({
  host: "http://f0749360.xsph.ru:3306/",
  database: "f0749360_test_db",
  user: "f0749360",
  password: "neugbuagci",
});

export default conn;
