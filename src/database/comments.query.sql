USE duaui;


CREATE TABLE comments(
    id INT(11) NOT NULL AUTO_INCREMENT,
    id_users INT(11) NOT NULL,
    id_publications INT(11) NOT NULL,
    comment VARCHAR(255) NOT NULL,
    create_  timestamp NOT NULL DEFAULT current_timestamp,
    updatee_ timestamp NOT NULL DEFAULT current_timestamp ON UPDATE CURRENT_TIMESTAMP,
    delete_  timestamp NOT NULL DEFAULT current_timestamp,
    PRIMARY KEY (id),
    FOREIGN KEY (id_users) REFERENCES users(id),
    FOREIGN KEY (id_publications) REFERENCES publications(id)
);