create database gerencie; 

use gerencie;

create table empresa(
idEmpresa int primary key auto_increment,
nomeEmpresa varchar(35),
telefone char(15),
cepEmpresa varchar(20),
CNPJ char(18)
);

create table usuario(
idUsuario int primary key auto_increment,
nomeCompleto varchar(60),
nomeUser varchar(25),
CPF char(14),
email varchar(40),
senha varchar(20),
telefone char(15),
isAtivo char(1),
tipo int, constraint chkTipo check(tipo in (1, 2, 3)),
-- 1 = desenvolvedor
-- 2 = Gerente;
-- 3 = Analista;
fkFuncionario INT,
FOREIGN KEY (fkFuncionario) REFERENCES usuario(idUsuario),
fkEmpresa INT,
FOREIGN KEY (fkEmpresa) REFERENCES usuario(idUsuario)
);

create table fastfood(
idFastFood int primary key auto_increment,
nomeFastFood varchar(35),
logradouro varchar(60),
bairro varchar(35),
CEP char(9),
CNPJ CHAR(18),
email varchar(45),
telefone char(15)
);

create table totem(	
idTotem int primary key auto_increment,
tempoDeAtividade timestamp,
capacidadeDisco double,
usoDoDisco double,
memoriaRAMTotal double,
memoriaDiscoTotal double,
threadsTotal int,
nucleosTotal double,
fkEmpresa INT,
FOREIGN KEY (fkEmpresa) REFERENCES totem(idTotem),
fkFastFood INT,
FOREIGN KEY (fkFastFood) REFERENCES totem(idTotem)
);

create table metrica(
idMetrica int primary key auto_increment, 
processosCPU double,
emUsoRAM  double,
disponivelRAM double,
fkTotem INT,
FOREIGN KEY (fkTotem) REFERENCES metrica(idMetrica)
);