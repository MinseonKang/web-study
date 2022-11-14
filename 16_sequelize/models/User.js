// CREATE TABLE user (
//     id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
//     userid VARCHAR(20) NOT NULL,
//     name VARCHAR(10) NOT NULL,
//     pw VARCHAR(20) NOT NULL
// );

const User = function (Sequelize, DataTypes) {
  const model = Sequelize.define(
    "user",
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      userid: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING(10),
        allowNull: false,
      },
      pw: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },
    },
    {
      tableName: "user", // 실제 DB의 테이블 이름
      freezeTableName: true, // 테이블 이름 고정
      timestamps: false, // 데이터가 추가/수정 되는 시간을 자동으로 컬럼 만들어서 기록
    }
  );

  return model;
};

module.exports = User;
