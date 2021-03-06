const express = require("express");
const router = express.Router({ mergeParams: true });
const { signup, signin } = require("../handlers/auth");

router.post("/signup", signup);
router.post("/signin", signin);

//export default router;
module.exports = router;
