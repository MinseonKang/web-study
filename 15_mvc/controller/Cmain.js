const Comment = require("../model/Comment");
const comments = Comment.commentInfos();

exports.main = (req, res) => {
  res.render("index");
};

exports.comments = (req, res) => {
  console.log(Comment.commentInfos()); // 댓글 확인용: [{}, {}, {}, [}]]
  res.render("comments", { commentInfos: comments });
};

exports.comment = (req, res) => {
  console.log(req.params); // route 매개변수(:id)에 대한 정보 담겨 있음
  console.log(req.params.id); // id 값 추출
  const commentId = req.params.id;

  console.log(comments[commentId - 1]);

  if (commentId < 1 || commentId > comments.length) {
    return res.render("404");
  }

  if (isNaN(commentId)) {
    return res.render("404");
  }

  res.render("comment", { commentInfo: comments[commentId - 1] });
};
