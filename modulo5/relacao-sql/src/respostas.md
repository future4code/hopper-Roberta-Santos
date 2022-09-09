CREATE TABLE Ticket (
		id VARCHAR(255) PRIMARY KEY,
		name VARCHAR(255) UNIQUE NOT NULL,
        price FLOAT NOT NULL
   
);

CREATE TABLE Rating (
		id VARCHAR(255) PRIMARY KEY,
    comment TEXT NOT NULL,
		rate FLOAT NOT NULL,
    movie_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Movie(id)
);

INSERT INTO Movie(id, name)
VALUES("filme1", "Titanic"),
("filme2","Vingadores");

-- chave estrangeira pega as informações de outras tabelas já criadas
INSERT INTO Rating (id, comment, rate, movie_id)
VALUES("rating1", "Assisti ao filme", "6", "filme1"),
("rating2","Amei o Filme","10", "filme2");

INSERT INTO Rating (id, comment, rate, movie_id)
VALUES("rating3", "Assisti ao filme", "6", "filme3");
-- -- Error Code 1452

ALTER TABLE Movie ADD Rating(
rating_movie FLOAT NOT NULL,
FOREIGN KEY (rating_movie) REFERENCES Rating(rate);