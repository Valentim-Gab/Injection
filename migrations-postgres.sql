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
	FOREIGN KEY (ID_USER) REFERENCES USERS (ID)
);

INSERT INTO USERS VALUES
(DEFAULT, 'adm', 'Administrador do Sistema',
'adm@email.vale', 'adm', TRUE, TRUE, 'admsenha');

INSERT INTO USERS VALUES
(DEFAULT, 'Gabriel', 'Adoro esportes e jogar sinuca',
'gabriel@email.vale', 'user', FALSE, TRUE, 'gabrielsenha');

INSERT INTO USERS VALUES
(DEFAULT, 'Eduarda', 'Apaixonada por vôlei, gosta de beber e dançar. Uma amante da vida',
'eduarda@email.vale', 'user', FALSE, TRUE, 'eduardasenha');

INSERT INTO IMAGE VALUES
(DEFAULT, 'Imagem teste', 'https://images.com/image.jpg', TRUE, 1)

INSERT INTO IMAGE VALUES
(DEFAULT, 'Imagem public', 'https://images.com/image.jpg', FALSE, 2)

INSERT INTO IMAGE VALUES
(DEFAULT, 'Imagem duda', 'https://images.com/image.jpg', FALSE, 3)

invasão salva:
SELECT title, url_image, id_user
FROM image
WHERE priv = false
AND id_user = 2
AND title LIKE '%safasf'

OR (SELECT EMAIL FROM USERS WHERE ID = ID_USER) = 'adm@email.vale'

--%'