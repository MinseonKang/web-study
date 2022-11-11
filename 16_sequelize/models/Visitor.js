// CREATE TABLE visitor (
//     id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
//     name VARCHAR(10) NOT NULL,
//     comment MEDIUMTEXT
// );

// visitor 모델(테이블 구조) 정의
// 시퀄라이즈 모델이랑 mysql table 연결
const Visitor = function (Sequelize, DataTypes) {
  // Sequelize: models/index.js의 sequelize
  // DataTypes: models/index.js의 Sequelize

  // Sequelize.define(param1, param2, param3)
  // param1: 모델 이름 설정 -> '' 문자열
  // param2: 컬럼 정의 -> {} 객체
  // param3: 모델 옵션 정의 -> {} 객체

  const model = Sequelize.define(
    "visitor",
    {
      // id INT NOT NULL AUTO_INCREMENT PRIMARY KEY
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        // name VARCHAR(10) NOT NULL,
        type: DataTypes.STRING(10),
        allowNull: false,
      },
      comment: {
        // comment MEDIUMTEXT
        type: DataTypes.TEXT("medium"),
      },
    },
    {
      tableName: "visitor", // 실제 DB의 테이블 이름
      freezeTableName: true, // 테이블 이름 고정
      timestamps: false, // 데이터가 추가/수정 되는 시간을 자동으로 컬럼 만들어서 기록
    }
  );

  return model;
};

module.exports = Visitor;
