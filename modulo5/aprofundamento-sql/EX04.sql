ALTER TABLE Projetos ADD description VARCHAR(300) NOT NULL;

DESCRIBE Projetos;

UPDATE Projetos SET description = "Projeto de rede de comunicação da Labenu" WHERE id = "003";

SELECT * FROM Projetos;