-- 데이터베이스 목록 보기
SHOW databases;

-- 데이터베이스 선택(사용)
USE kdt;

-- 데이터베이스 내 테이블 목록 보기
SHOW tables;

-- #####################
-- DDL
-- visitor 테이블 생성하기
CREATE TABLE visitor (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(10) NOT NULL,
    comment MEDIUMTEXT
);

-- visitor 테이블 구조 확인
DESC visitor;

-- visitor 테이블에 데이터 삽입하기
INSERT INTO visitor (name, comment) VALUES ('홍길동', '내가 왔다.');
INSERT INTO visitor (name, comment) VALUES ('이찬혁', '으라차차.');
INSERT INTO visitor (name, comment) VALUES ('강민선', '을밀대에서 냉명 먹자');


-- visitor 테이블 안의 데이터들 전체보기
SELECT * FROM visitor;