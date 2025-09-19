CREATE DATABASE taskflow;
USE taskflow;

CREATE TABLE usuarios (
    id_usuario INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    senha VARCHAR(255) NOT NULL,
    data_criacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE tarefas (
    id_tarefa INT AUTO_INCREMENT PRIMARY KEY,
    id_usuario INT NOT NULL,
    titulo VARCHAR(150) NOT NULL,
    descricao TEXT,
    status ENUM('pendente', 'em_andamento', 'concluida') DEFAULT 'pendente',
    prioridade ENUM('baixa', 'media', 'alta') DEFAULT 'media',
    favorita BOOLEAN DEFAULT FALSE,
    data_criacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    data_limite DATE,
    FOREIGN KEY (id_usuario) REFERENCES usuarios(id_usuario) ON DELETE CASCADE
);

CREATE TABLE categorias (
    id_categoria INT AUTO_INCREMENT PRIMARY KEY,
    id_usuario INT NOT NULL,
    nome_categoria VARCHAR(100) NOT NULL,
    cor VARCHAR(7) DEFAULT '#A0522D',
    FOREIGN KEY (id_usuario) REFERENCES usuarios(id_usuario) ON DELETE CASCADE
);

CREATE TABLE tarefa_categoria (
    id_tarefa INT NOT NULL,
    id_categoria INT NOT NULL,
    PRIMARY KEY (id_tarefa, id_categoria),
    FOREIGN KEY (id_tarefa) REFERENCES tarefas(id_tarefa) ON DELETE CASCADE,
    FOREIGN KEY (id_categoria) REFERENCES categorias(id_categoria) ON DELETE CASCADE
);

CREATE TABLE favoritos (
    id_usuario INT NOT NULL,
    id_tarefa INT NOT NULL,
    data_favorito TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (id_usuario, id_tarefa),
    FOREIGN KEY (id_usuario) REFERENCES usuarios(id_usuario) ON DELETE CASCADE,
    FOREIGN KEY (id_tarefa) REFERENCES tarefas(id_tarefa) ON DELETE CASCADE
);

INSERT INTO usuarios (nome, email, senha) VALUES
('Igor', 'igoralves5928@gmail.com', 'choranub1'),
('Italo', 'italo@gmail.com', 'italoleray'),
('Rafael', 'rafaelpereira12', 'salvadorbahia');

INSERT INTO tarefas (id_usuario, titulo, descricao, prioridade, status, favorita, data_limite) VALUES
(1, 'Estudar MySQL', 'Revisar comandos básicos de SQL', 'alta', 'pendente', TRUE, '2025-09-25'),
(1, 'Fazer trabalho de Redes', 'Entrega até sexta-feira', 'media', 'em_andamento', FALSE, '2025-09-22'),
(2, 'Organizar anotações', 'Separar por matérias', 'baixa', 'pendente', FALSE, NULL);

INSERT INTO categorias (id_usuario, nome_categoria, cor) VALUES
(1, 'Escola', '#1E90FF'),
(1, 'Trabalho', '#32CD32'),
(2, 'Pessoal', '#FFD700');

INSERT INTO tarefa_categoria (id_tarefa, id_categoria) VALUES
(1, 1), -- "Estudar MySQL" → "Escola"
(2, 2), -- "Trabalho de Redes" → "Trabalho"
(3, 3); -- "Organizar anotações" → "Pessoal"

INSERT INTO favoritos (id_usuario, id_tarefa) VALUES
(1, 1), -- Igor favoritou "Estudar MySQL"
(2, 3); -- Caio favoritou "Organizar anotações"