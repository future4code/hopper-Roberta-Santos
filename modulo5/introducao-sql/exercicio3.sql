SELECT * FROM Funcionarios;

SELECT id, nome FROM Funcionarios;

SELECT id as identifier FROM Funcionarios;

SELECT * FROM Funcionarios WHERE id = 3;

SELECT * FROM Funcionarios WHERE nome LIKE "%a%";

SELECT * FROM Funcionarios WHERE nome LIKE "%u%" AND nome NOT LIKE "%r%";
