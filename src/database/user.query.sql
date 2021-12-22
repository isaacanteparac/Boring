USE duaui;

CREATE TABLE users (
    id INT(11) NOT NULL AUTO_INCREMENT,
    username VARCHAR(15) NOT NULL,
    fullname VARCHAR(100) NOT NULL,
    password VARCHAR(60) NOT NULL,
    emial VARCHAR(100) NOT NULL,
    photo VARCHAR(255) NULL,
     create_  timestamp NOT NULL DEFAULT current_timestamp,
    updatee_ timestamp NOT NULL DEFAULT current_timestamp ON UPDATE CURRENT_TIMESTAMP,
    delete_  timestamp NOT NULL DEFAULT current_timestamp,
    PRIMARY KEY (id)
);

