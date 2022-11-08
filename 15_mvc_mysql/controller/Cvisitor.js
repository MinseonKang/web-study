const { render } = require("ejs");
const Visitor = require("../model/Visitor");

// GET / => localhost:PORT/
exports.main = (req, res) => {
  res.render("index");
};

// GET /visitor => localhost:PORT/visitor
exports.getVisitors = (req, res) => {
  // before
  //   console.log(Visitor.getVisitors());
  //   res.render("visitor", { data: Visitor.getVisitors() });

  // after
  Visitor.getVisitors((result) => {
    console.log("Cvisitor.js: ", result);
    res.render("visitor", { data: result });
  });
};

// POST /visitor/write => localhost:PORT/visitor/write
exports.postVisitor = (req, res) => {
  console.log(req.body);

  Visitor.postVisitor(req.body, (result) => {
    console.log("Cvisitor.js: ", result);
    res.send({
      id: result, // pk(id) -> 10
      name: req.body.name, // 폼에 입력한 name
      comment: req.body.comment, // 폼에 입력한 comment
    });
  });
};

// PATCH /visitor/edit => localhost:PORT/visitor/edit
exports.editVisitor = (req, res) => {};

// DELETE /visitor/delete => localhost:PORT/visitor/delete
exports.deletetVisitor = (req, res) => {
  console.log(req.body.id);

  Visitor.deletetVisitor(req.body.id, (result) => {
    console.log("Cvisitor.js: ", result);
    res.send("삭제하시겠습니까?");
  });
};
