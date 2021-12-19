USE origincarbon;


CREATE TABLE comments(
    id INT(11) NOT NULL AUTO_INCREMENT,
    id_user INT(11) NOT NULL,
    id_publication INT(11) NOT NULL,
    comment VARCHAR(255) NOT NULL,
    create_  timestamp NOT NULL DEFAULT current_timestamp,
    updatee_ timestamp NOT NULL DEFAULT current_timestamp ON UPDATE CURRENT_TIMESTAMP,
    delete_  timestamp NOT NULL DEFAULT current_timestamp,
    PRIMARY KEY (id),
    FOREIGN KEY (id_user) REFERENCES user(id),
    FOREIGN KEY (id_publication) REFERENCES publication(id)
);