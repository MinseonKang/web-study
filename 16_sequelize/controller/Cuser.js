const models = require("../models");

// GET /signup => localhost:PORT/signup
exports.signup = (req, res) => {
  res.render("signup");
};

// POST /signup => localhost:PORT/signup
exports.signupPost = (req, res) => {
  // INSERT INTO user (userid, pw, name) VALUES ('${data.userid}', '${data.pw}', '${data.name}')
  models.User.create({
    userid: req.body.userid,
    pw: req.body.pw,
    name: req.body.name,
  }).then((result) => {
    console.log(result);
    res.send(result);
  });
};

// GET /signin => localhost:PORT/signin
exports.signin = (req, res) => {
  res.render("signin");
};

// POST /signin => localhost:PORT/signin
exports.signinPost = (req, res) => {
  // SELECT * FROM user WHERE userid='${data.userid}' and pw='${data.pw}' LIMIT 1
  models.User.findOne({
    where: { userid: req.body.userid, pw: req.body.pw },
  }).then((result) => {
    res.send(result);
  });
};

// POST /profile => localhost:PORT/profile
exports.profile = (req, res) => {
  // SELECT * FROM user WHERE userid='${userid}' LIMIT 1
  models.User.findOne({
    where: { userid: req.body.userid },
  }).then((result) => {
    res.render("profile", { data: result });
  });
};

// POST /profile/edit => localhost:PORT/profile/edit
exports.profileEdit = (req, res) => {
  // UPDATE user SET userid='${data.userid}', name='${data.name}', pw='${data.pw}' WHERE id='${data.id}
  models.User.update(
    {
      userid: req.body.userid,
      name: req.body.name,
      pw: req.body.pw,
    },
    {
      where: {
        id: req.body.id,
      },
    }
  ).then((result) => {
    console.log("update() : ", result);
    res.send("회원정보 수정 성공!");
  });
};

// POST /profile/delete => localhost:PORT/profile/delete
exports.profileDelete = (req, res) => {
  // DELETE FROM user WHERE id='${id}
  models.User.destroy({
    where: { id: req.body.id },
  }).then((result) => {
    console.log("destroy() : ", result);
    res.send("회원 탈퇴 성공!");
  });
};
