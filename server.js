const express = require("express");
const app = express();

app.use(express.json());

// Rota de teste
app.get("/", (req, res) => {
  res.status(200).send("🚀 TITANTEC Webhook rodando com sucesso!");
});

// Exemplo de webhook
app.post("/webhook", (req, res) => {
  console.log("Webhook recebido:", req.body);
  res.status(200).json({ status: "ok" });
});

// Azure usa a variável PORT
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
