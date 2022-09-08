create database gerencie; 

use gerencie;

create table empresa (
idEmpresa int primary key auto_increment,
cnpj varchar(20),
nomeEmpresa varchar(100),
cepEmpresa varchar(20),
numero varchar(18)
);

create table funcionario (
idFuncionario int auto_increment,
nome varchar(45),
email varchar(100),
senha varchar(100),
tipo int, constraint chkTipo check(tipo in (1, 2, 3)),
-- 1 = desenvolvedor
-- 2 = Gerente;
-- 3 = Analista;
fkEmpresa int,
foreign key (fkEmpresa) references Empresa(idEmpresa),
primary key (idFuncionario, fkEmpresa)
);