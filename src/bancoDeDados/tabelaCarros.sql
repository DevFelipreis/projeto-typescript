create database  tabelaCarros;

create table carros(
id serial primary key,
marca varchar(50),
modelo varchar(50),
ano integer,
cor varchar(50),
valor integer
);

create table marca_carros(
id serial primary key,
marca varchar(50)
);
