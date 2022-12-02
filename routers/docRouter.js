import Router from "express";
import docControler from "../controlers/docControler.js";

const docRouter = Router();

docRouter.get("/", docControler.getAll);
docRouter.get("/:id", docControler.getOne);
docRouter.post("/", docControler.add);
docRouter.delete("/:id", docControler.delete);

export default docRouter;
