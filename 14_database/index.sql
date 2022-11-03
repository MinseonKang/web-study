-- DDL
-- Data Definiton Language : 데이터베이스/테이블 정의

-- [데이터베이스 관련 명령]
-- 1. 데이터베이스 생성 (+ 한글 인코딩)
CREATE DATABASE kdt DEFAULT CHARACTER SET utf8 DEFAULT COLLATE utf8_general_ci;

-- 2. 데이터베이스 생성 확인 (목록 조회)
SHOW databases;

-- 3. 데이터베이스 사용 선언
USE kdt;

-- 4. 데이터베이스 삭제
DROP DATABASE kdt;

-- [테이블 관련 명령어]
-- 1. 테이블 생성
/*
CREATE TABLE 테이블명 (
    필드1 값형식,
    필드2 값형식
);
*/
-- 제약 조건
-- NOT NULL: NULL 허용 x
-- AUTO_INCREMENT: 자동 숫자 증가
-- PRIMARY KEY: 기본키 설정
-- DEFAULT: 기본값
-- UNIQUE: 중복 허용 x
CREATE TABLE user (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(10) NOT NULL,
    age INT NOT NULL,
    address VARCHAR(100) NOT NULL
);

CREATE TABLE member (
    id VARCHAR(20) NOT NULL PRIMARY KEY,
    name VARCHAR(5) NOT NULL,
    age INT(2),
    gender varchar(20) NOT NULL,
    email varchar(50),
	promotion varchar(2) DEFAULT 'x'
);

-- 2. 테이블 목록 확인
SHOW tables;

-- 3. 테이블 구조 확인
DESC user;
DESC member;

-- 4. 테이블 삭제
-- DROP: 전부 삭제 (구조 자체를 삭제)
-- TRUNCATE: 초기화 (모든 행 삭제)
DROP TABLE user;
TRUNCATE user;

-- 5. 테이블 수정 (구조 수정)
-- 5-1. 컬럼 추가 (ADD)
ALTER TABLE user ADD new_column VARCHAR(10);

-- 5-2. 컬럼 수정 (MODIFY)
ALTER TABLE user MODIFY new_column INT;

-- 5-3. 컬럼 삭제 (DROP)
ALTER TABLE user DROP new_column;
