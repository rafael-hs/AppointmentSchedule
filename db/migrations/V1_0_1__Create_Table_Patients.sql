CREATE TABLE patients(
	id INT IDENTITY (1,1) PRIMARY KEY, 
	nome VARCHAR(70) NOT NULL,
	data_nascimento DATETIME,
	data_inic_consulta DATETIME,
	data_fin_consulta DATETIME,
	observacao VARCHAR(250) DEFAULT NULL
);