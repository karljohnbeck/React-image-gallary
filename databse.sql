-- use database: react_gallery

-- create table
CREATE TABLE posts (
	id SERIAL PRIMARY KEY,
	path varchar(255),
	description varchar(255), 
	likes numeric DEFAULT 0
);

-- add this data
INSERT INTO posts (path, description)
VALUES ('images/japan.jpg', 'Walking down Tsukiji Fish Market in Japan.');

INSERT INTO posts (path, description)
VALUES ('images/gracie.jpg', 'My cat Gracie chilling out.'),
('images/hazmat.jpg', 'Me in a hazmat suit for past work training.'),
('images/kateBirthday.jpg', 'Celebrating my girlfriend Kates birthday!'),
('images/kateAndDog.jpg', 'A cute dog we saw when in Japan');
