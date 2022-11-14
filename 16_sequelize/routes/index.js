const express = require("express");
const controller = require("../controller/Cvisitor");
const controller2 = require("../controller/Cuser");
const router = express.Router();

// 기본 주소: localhost:PORT

// 방명록
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

// 회원가입
// GET /siginup => localhost:PORT/signup
router.get("/signup", controller2.signup);
// POST /siginup => localhost:PORT/signup
router.post("/signup", controller2.signupPost);

// 로그인
// GET /signin => localhost:PORT/signin
router.get("/signin", controller2.signin);
// POST /signin => localhost:PORT/signin
router.post("/signin", controller2.signinPost);

// 프로필
// POST /profile => localhost:PORT/profile
router.post("/profile", controller2.profile);
// POST /profile/edit => localhost:PORT/profile/edit
router.post("/profile/edit", controller2.profileEdit);
// DELETE /profile/delete => localhost:PORT/profile/delete
router.post("/profile/delete", controller2.profileDelete);

module.exports = router;
