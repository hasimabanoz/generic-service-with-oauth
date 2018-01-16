/* USE DB test*/

/* Drop Tables */
DROP TABLE IF EXISTS public.user_role;
DROP TABLE IF EXISTS public.user;
DROP TABLE IF EXISTS public.role;


/* Create Tables */
CREATE TABLE public.user
(
	id serial NOT NULL,
	username varchar(255) NOT NULL UNIQUE,
	password varchar(255) NOT NULL,
	firstname varchar(255),
	surname varchar(255),
	phone varchar(255),
	email varchar(255) NOT NULL UNIQUE,
	created_date date NOT NULL,
	created_user varchar(255) NOT NULL,
	updated_date date,
	updated_user varchar(255),
	PRIMARY KEY (id)
) WITHOUT OIDS;


CREATE TABLE public.role
(
	id serial NOT NULL,
	name varchar(255) NOT NULL,
	created_date date NOT NULL,
	created_user varchar(255) NOT NULL,
	updated_date date,
	updated_user varchar(255),
	PRIMARY KEY (id)
) WITHOUT OIDS;


CREATE TABLE public.user_role
(
	role_id int NOT NULL,
	user_id int NOT NULL
) WITHOUT OIDS;



/* Create Foreign Keys */

ALTER TABLE public.user_role
	ADD FOREIGN KEY (user_id)
	REFERENCES public.user (id)
	ON UPDATE RESTRICT
	ON DELETE RESTRICT
;

ALTER TABLE public.user_role
	ADD FOREIGN KEY (role_id)
	REFERENCES public.role (id)
	ON UPDATE RESTRICT
	ON DELETE RESTRICT
;


INSERT INTO public.role( name, created_date, created_user)
VALUES ( 'ADMIN', CURRENT_DATE, 'test-user');
	
INSERT INTO public.user( username, password, firstname, surname, phone, email, created_date, created_user)
VALUES ( 'admin', '21232F297A57A5A743894A0E4A801FC3', 'admin_firstname', 'admin_surname', '11111', 'generic@32bit.com.tr', CURRENT_DATE, 'test-user');
	
INSERT INTO public.user_role( role_id, user_id)
VALUES (1, 1);

