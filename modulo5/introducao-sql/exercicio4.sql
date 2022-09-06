USE `Hopper-4314203-roberta-santos`;

INSERT INTO Funcionarios (id, nome, email)
VALUES( 004, "Yuzo", "yuzo@lbn.com");

SELECT * FROM Funcionarios WHERE id=004;	
DELETE FROM Funcionarios WHERE id = 004;
SELECT * FROM Funcionarios;
