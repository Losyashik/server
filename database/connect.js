import pg from "pg";

const pool = new pg.Pool({
  host: "dpg-ce5a4jcgqg49417uijjg-a",
  database: "test_db_hulo",
  user: "test_db",
  password: "xWFNwDx4MZIcBaQRVcpOe8ImFgPsi4tW",
  port: "5432",
});

export default pool;
