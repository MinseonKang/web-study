// (임시) DB로부터 댓글 목록을 가져옴
exports.commentInfos = () => {
  return [
    {
      id: 1,
      userid: "helloworld!",
      date: "2022-10-31",
      comment: "안녕하세요!",
    },
    { id: 2, userid: "hello", date: "2022-11-02", comment: "반갑습니다." },
    { id: 3, userid: "world", date: "2022-11-03", comment: "배고파요" },
    { id: 4, userid: "!", date: "2022-11-04", comment: "점심 뭐 먹지?" },
  ];
};
