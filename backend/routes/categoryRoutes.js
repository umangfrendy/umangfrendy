const router = require("express").Router()
const categotyCtrl = require("../controller/categoryCtrl")


// Route for create category
router.post("/create", categotyCtrl.createCategory)

// Route for read all category
router.get("/readAll", categotyCtrl.getAllCategorys)

// Route for read category
router.get("/read/:id", categotyCtrl.getCategory)


module.exports = router