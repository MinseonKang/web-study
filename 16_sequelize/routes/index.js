const express = require("express");
const controller = require("../controller/Cvisitor");
const router = express.Router();

// 기본 주소: localhost:PORT

// GET / => localhost:PORT/
router.get("/", controller.main);

// GET /visitor => localhost:PORT/visitor
router.get("/visitor", controller.getVisitors); // 방명록 전체 조회

// GET /visitor/get => localhost:PORT/visitor/get
router.get("/visitor/get", controller.getVisitor); // 방명록 하나 조회

// POST /visitor/write => localhost:PORT/visitor/write
router.post("/visitor/write", controller.postVisitor); // 방명록 추가

// PATCH /visitor/edit => localhost:PORT/visitor/edit
router.patch("/visitor/edit", controller.patchVisitor); // 방명록 수정

// DELETE /visitor/delete => localhost:PORT/visitor/delete
router.delete("/visitor/delete", controller.deletetVisitor); // 방명록 하나 삭제

module.exports = router;
