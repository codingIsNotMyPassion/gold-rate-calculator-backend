const router = require("express").Router()
const {getGoldPrice,postGoldPrice,updateGoldPrice,deleteGoldPrice} = require("../controller/priceController")

router.get("/", getGoldPrice)
router.post("/", postGoldPrice)
router.put("/:id", updateGoldPrice)
router.delete("/:id", deleteGoldPrice)

module.exports = router;