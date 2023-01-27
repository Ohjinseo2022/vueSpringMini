### 회원정보 테이블 SQL

CREATE TABLE `newuser` (
`idx` int NOT NULL AUTO_INCREMENT,
`name` varchar(45) NOT NULL,
`id` varchar(100) NOT NULL,
`password` varchar(500) NOT NULL,
`email` varchar(100) NOT NULL,
`phone` varchar(45) NOT NULL,
PRIMARY KEY (`idx`),
UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci

### 게시글 테이블 SQL

CREATE TABLE `contents` (
`idx` int NOT NULL AUTO_INCREMENT,
`user_idx` int NOT NULL,
`title` varchar(100) NOT NULL,
`contents` varchar(5000) NOT NULL,
`uptime` varchar(45) NOT NULL,
PRIMARY KEY (`idx`),
KEY `idx_idx` (`user_idx`),
CONSTRAINT `idx` FOREIGN KEY (`user_idx`) REFERENCES `newuser` (`idx`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci
