-- 데이터베이스 목록 보기
SHOW database;

-- 데이터베이스 선택(사용)
USE kdt;

-- 데이터베이스 내 테이블 목록 보기
SHOW tables;

-- #####################
-- DDL
-- visitor 테이블 생성하기
CREATE TABLE visitor (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHER(10) NOT NULL,
    comment MEDIUMTEXT
);

-- visitor 테이블 구조 확인
DESC visitor;

-- DML
-- visitor 테이블에 데이터 삽입하기 (CREATE)
INSERT INTO visitor (name, comment) VALUES ('홍길동', '내가 왔다.');
INSERT INTO visitor (name, comment) VALUES ('이찬혁', '으라차차.');

-- visitor 테이블 안의 데이터들 조회하기 (READ)
SELECT * FROM visitor;

-- DCL
-- mySQL 사용자 추가(user 사용자 생성하기)
CREATE USER 'user'@'%' IDENTIFIED BY '비밀번호';
-- user 계정에 db 권한 부여 (모든 db에 접근 가능하도록 설정)
GRANT ALL PRIVILEGES ON *.* TO 'user'@'%' WITH GRANT OPTION;
-- 현재 사용 중인 mySQL 캐시 지우고 새로운 설정 적용
FLUSH PRIVILEGES;

-- root 비밀번호 변경
ALTER USER 'user'@'%'IDENTIFIED WITH mysql_native_password BY '1234';