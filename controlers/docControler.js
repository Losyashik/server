import conn from "../database/connect.js";

class docsControler {
  async getAll(req, res) {
    const docs = await conn.query(
      "SELECT name, count(id_user) as count from docs group by name order by count DESC;"
    );
    res.json(docs.row);
  }
  async getOne(req, res) {
    const { id } = req.params;
    const result = await conn.query(
      "SELECT id, id_user as user, name FROM docs WHERE id_user = " + id
    );
    res.json(result.rows);
  }
  async add(req, res) {
    const { user, doc } = req.body;

    const response = await conn.query(
      "SELECT count(id) as count FROM docs WHERE id_user = " +
        user +
        " AND name = '" +
        doc +
        "'"
    );
    if (response.rows[0].count > 0)
      res.json({
        message: "Данный документ уже запрашивался",
        color: "#f00",
      });
    else {
      await conn.query(
        "INSERT INTO docs(id_user, name) VALUES ('" + user + "','" + doc + "')"
      );

      res.json({ message: "Документ добавлен", color: "#0f0" });
    }
  }
  async delete(req, res) {
    const { id } = req.params;
    await conn.query("DELETE FROM docs WHERE id = " + id);
    res.json({ message: "Удалено" });
  }
}
export default new docsControler();
