const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

let users = []; // Aquí se guardarán temporalmente los datos

// Endpoint para agregar usuarios
app.post("/users", (req, res) => {
  console.log("📩 Petición recibida:", req.body); // 👈 Agrega esto
  const { name, email } = req.body;

  if (!name || !email) {
    return res.status(400).json({ message: "Faltan datos" });
  }

  const newUser = { name, email };
  users.push(newUser);
  res.json({ message: "Usuario agregado correctamente", user: newUser });
});

// Endpoint para ver todos los usuarios
app.get("/users", (req, res) => {
  res.json(users);
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Servidor corriendo en http://localhost:${PORT}`));
