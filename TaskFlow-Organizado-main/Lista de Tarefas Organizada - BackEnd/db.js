const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",       // seu usuário MySQL
  password: "senha",  // sua senha MySQL
  database: "taskflow"
});

db.connect(err => {
  if (err) {
    console.error("❌ Erro ao conectar ao MySQL:", err);
    return;
  }
  console.log("✅ Conectado ao MySQL!");
});

module.exports = db;