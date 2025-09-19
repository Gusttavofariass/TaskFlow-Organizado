const express = require("express");
const cors = require("cors");

const usuarioRoutes = require("./routes/usuario");
app.use("/api/usuarios", usuarioRoutes);
const usuariosRoutes = require("./routes/usuarios");
const tarefasRoutes = require("./routes/tarefas");
const favoritosRoutes = require("./routes/favoritos");

const app = express();
app.use(cors());
app.use(express.json());

// Rotas
app.use("/api/usuarios", usuariosRoutes);
app.use("/api/tarefas", tarefasRoutes);
app.use("/api/favoritos", favoritosRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
});