import conn from "./../database/connect.js";

class userControler {
  async getAllUsers(req, res) {
    const result = await conn.query("INSERT INTO users (id, name) VALUES (1, 'Иванов И. И.'),(2, 'Петров П. П.'),(3, 'Сидоров С. С.');");
    res.json(result.rows);
  }
}
export default new userControler();
