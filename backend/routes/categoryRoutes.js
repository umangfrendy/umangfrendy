const router = require("express").Router()
const categotyCtrl = require("../controller/categoryCtrl")


// Route for create category
router.post("/create", categotyCtrl.createCategory)
router.get("/readAll", categotyCtrl.getAllCategorys)

module.exports = router