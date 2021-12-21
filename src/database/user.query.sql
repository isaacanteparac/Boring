USE origincarbon;

CREATE TABLE user (
    id INT(11) NOT NULL AUTO_INCREMENT,
    username VARCHAR(15) NOT NULL,
    fullname VARCHAR(100) NOT NULL,
    password VARCHAR(60) NOT NULL,
    emial VARCHAR(100) NOT NULL,
    photo VARCHAR(255) NULL,
    PRIMARY KEY (id)
);

alter table user
    ADD create_  timestamp NOT NULL DEFAULT current_timestamp,
    ADD updatee_ timestamp NOT NULL DEFAULT current_timestamp ON UPDATE CURRENT_TIMESTAMP,
    ADD delete_  timestamp NOT NULL DEFAULT current_timestamp