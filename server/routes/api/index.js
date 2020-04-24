const exporess = require("express");
const router = exporess.Router();
const book = require("../../controller/bookController");

router.get("/books", book.all);
router.get("/book/:id", book.byId);
router.post("/book", book.create);
router.put("/book/:id", book.update);
router.delete("/book/:id", book.remove);

module.exports = router;