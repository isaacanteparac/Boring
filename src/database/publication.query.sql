USE duaui;

CREATE TABLE publications(
    id INT(11) NOT NULL AUTO_INCREMENT,
    description VARCHAR(255) NULL,
    file_content MEDIUMTEXT,
    likes INT(11),
    dislikes INT(11),
    views INT(11),
    id_user INT(11),
    create_  timestamp NOT NULL DEFAULT current_timestamp,
    updatee_ timestamp NOT NULL DEFAULT current_timestamp ON UPDATE CURRENT_TIMESTAMP,
    delete_  timestamp NOT NULL DEFAULT current_timestamp,
    PRIMARY KEY (id),
    FOREIGN KEY (id_user) REFERENCES users(id)
);