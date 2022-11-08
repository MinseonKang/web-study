// mySQL connection
const mysql = require("mysql");

const conn = mysql.createConnection({
  host: "localhost",
  user: "user",
  password: "1234",
  database: "kdt",
});

exports.getVisitors = (callback) => {
  // query(SQL, callback)
  conn.query("SELECT * FROM visitor", (err, rows) => {
    if (err) {
      throw err;
    }

    console.log("Visitor.js: ", rows); // [{}, {}]
    callback(rows);
  });
};

exports.postVisitor = (data, callback) => {
  conn.query(
    `INSERT INTO visitor (name, comment) VALUES ('${data.name}', '${data.comment}')`,
    (err, rows) => {
      if (err) {
        throw err;
      }

      //   if (data.name.length > 9) {
      //     console.log("이름은 10글자 미만으로 해 주세요!");
      //   } else {
      //   }

      console.log("Visitor.js: ", rows);
      callback(rows.insertId); // pk (id)
    }
  );
};

// 수정해야함
exports.editVisitor = (data, callback) => {
  conn.query(`UPDATE visitor SET comment ='${data.comment}' WHERE id = ${id}`);
};

exports.deletetVisitor = (id, callback) => {
  // id: 사용자가 삭제 버튼을 클릭한 그 행의 id값
  console.log("id: ", id);
  conn.query(`DELETE FROM visitor WHERE id = ${id}`, (err, rows) => {
    if (err) {
      throw err;
    }

    console.log("Visitor: ", rows);
    callback(true); // true: 삭제 성공을 의미
  });
};
