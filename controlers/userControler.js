import conn from "./../database/connect.js";

class userControler {
  async getAllUsers(req, res) {
    const result = await conn.query("SELECT * FROM users");
    res.json(result.rows);
  }
}
export default new userControler();
