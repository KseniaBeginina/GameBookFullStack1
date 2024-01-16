CREATE ROLE root WITH LOGIN PASSWORD 'password';
ALTER ROLE root SUPERUSER;
create database root;

create database GameBook;

CREATE TABLE IF NOT EXISTS users
(
    id bigserial,
    login character varying(255) NOT NULL,
    name character varying(255) NOT NULL,
    password character varying(255) NOT NULL,
    CONSTRAINT users_pkey PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS games
(
    age integer NOT NULL,
    liked boolean NOT NULL default false,
    id bigserial,
    id_user bigint NOT NULL,
    description character varying(255),
    img character varying(255),
    name character varying(255) NOT NULL,
    players character varying(255) NOT NULL,
    CONSTRAINT games_pkey PRIMARY KEY (id),
    CONSTRAINT ffkiu FOREIGN KEY (id_user)
        REFERENCES users (id) MATCH SIMPLE
        ON UPDATE CASCADE
        ON DELETE NO ACTION
);