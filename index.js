const express = require('express');
const cors = require('cors');
const Sequelize = require('sequelize');

// Configuração do banco de dados
const sequelize = new Sequelize('saep', 'root', 'admin', {
    dialect: 'mysql',
    host: 'localhost',
    port: 3306
});

// Definindo o modelo 'Curso'
const Curso = sequelize.define('curso', {
    id_curso: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    foto: {
        type: Sequelize.TEXT
    },
    nome_curso: {
        type: Sequelize.TEXT
    },
    instituicao: {
        type: Sequelize.TEXT
    },
    empresa_id: {
        type: Sequelize.INTEGER
    }
}, {
    freezeTableName: true,
    timestamps: false
});

// Definindo o modelo 'Empresa'
const Empresa = sequelize.define('empresa', {
    id_empresa: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    nome: {
        type: Sequelize.TEXT
    },
    logo: {
        type: Sequelize.TEXT
    }
}, {
    freezeTableName: true,
    timestamps: false
});

// Definindo o modelo 'Usuario'
const Usuario = sequelize.define('usuario', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    nome: {
        type: Sequelize.TEXT
    },
    email: {
        type: Sequelize.TEXT
    },
    nickname: {
        type: Sequelize.TEXT
    },
    senha: {
        type: Sequelize.INTEGER
    },
    foto: {
        type: Sequelize.TEXT
    },
    createdAt: {
        type: Sequelize.TEXT
    },
    updatedAt: {
        type: Sequelize.TEXT
    }
}, {
    freezeTableName: true,
    timestamps: false
});

// Inicializando o app Express
const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

app.post('/api/login', async (req, res) => {
    const { email, senha } = req.body;
    const usuario = await Usuario.findOne({ where: { email, senha } });

    if (usuario) {
        res.json({ success: true, user: usuario });
    } else {
        res.json({ success: false });
    }
});

// Conexão com o banco de dados e sincronização dos modelos
(async () => {
    try {
        await sequelize.authenticate();
        console.log('Conexão com o banco de dados estabelecida com sucesso.');
        
        await sequelize.sync();

        // Rota para listar usuários
        app.get('/api/usuarios', async (req, res) => {
            const listaUsuarios = await Usuario.findAll();
            res.json(listaUsuarios);
        });

        app.listen(PORT, () => {
            console.log(`Servidor rodando na porta ${PORT}`);
        });
    } catch (error) {
        console.error('Erro ao conectar ao banco de dados:', error);
    }
})();
