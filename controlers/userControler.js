import conn from "./../database/connect.js";

class userControler {
  getAllUsers(req, res) {
    conn.query("SELECT * FROM user", (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.json(result);
      }
    });
  }
}
export default new userControler();
