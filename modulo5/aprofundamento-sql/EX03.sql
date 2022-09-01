ALTER TABLE Projetos DROP COLUMN title;
describe Projetos;

ALTER TABLE Projetos CHANGE date dueDate DATE NOT NULL;

ALTER TABLE Funcionarios MODIFY email VARCHAR(255) UNIQUE;

DESCRIBE Funcionarios

