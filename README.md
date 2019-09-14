## Projeto feito para vaga de desenvolvedor na ITIX 

## Tecnologias
	-Dotnet core 2.2 Backend 
	-Angular 6 frontEnd 
	-Evolve para migrations (acabou que vi que o evolve não é capaz de criar bancos no sql server, por isso peço a criação manual)
	-Xunit para testes de unidade 

## Comandos para executar a App 
	- 'npm i' dentro do diretório '\AppointmentSchedule\ClientApp' para baixar as dependências <br />
	- Criar banco de dados (sugestão = appointment_schedule) e indicar o banco, no appSettings.json, Ex:
		- "MsSqlConnection":
		   "MsSqlConnectionString": "Server=Maquina\\SQLEXPRESS;Database=appointment_schedule;User Id=user\\joao.carmo;Password=2134;Trusted_Connection=true;" 
			}, <br />
		- colocar o campo password se tiver senha de usuário windows, no caso eu coloquei uma connectionsString de umas instância do SQL SERVER EXPRESS, essa é a forma de autênticação no banco.
	- Após criar e colocar o nome do banco dentro da app é só executar, será feito o migrate com as tabelas e alguns mocks para teste.
	-Qualquer dúvida só entrar em contato 
		- rafael.contatotrab@gmail.com 
		- cel:988830467 wpp, 981027002 
		
## Algumas imagens da App
### Tela Inicial
![alt text](./AppointmentSchedule/ClientApp/src/assets/telaInicio.png) 
	
	
### Cadastro
![alt text](./AppointmentSchedule/ClientApp/src/assets/telaInicio2.png)
	
### Alteração
![alt text](./AppointmentSchedule/ClientApp/src/assets/telaInicio3.png)
