const express = require("express");
const controller = require("../controller/Cmain");
const router = express.Router();

// GET / => localhost:PORT/
router.get("/", controller.main);

// POST /practice30 => localhost:PORT/practice30
router.post("/practice30", controller.practice30);

// module.exports를 통해서 router 등록 -> 다른 파일에서도 사용 가능
module.exports = router;
