CREATE TABLE patients(
	id INT IDENTITY (1,1) PRIMARY KEY, 
	nome VARCHAR(70) NOT NULL,
	data_nascimento DATETIME,
	data_consulta DATETIME,
	hora_inicio TIME,
	hora_fim TIME,
	observacao VARCHAR(250) DEFAULT NULL
);