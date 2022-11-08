const { userInfo } = require("../model/User");
const User = require("../model/User");

// GET /user
exports.user = (req, res) => {
  console.log(User.userInfo()); // { 회원 정보 }
  res.render("user", { userInfo: userInfo() });
};
