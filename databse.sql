


CREATE TABLE posts (
	id SERIAL PRIMARY KEY,
	path varchar(255),
	description varchar(255), 
	likes numeric DEFAULT 0
);


INSERT INTO posts (path, description)
VALUES ('images/japan.jpg', 'japan');

INSERT INTO posts (path, description)
VALUES ('images/gracie.jpg', 'gracie'),
('images/hazmat.jpg', 'hazmat'),
('images/kateBirthday.jpg', 'kateBirthday'),
('images/kateAndDog.jpg', 'kateAndDog');
