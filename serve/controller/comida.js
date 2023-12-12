const express = require("express");
const { PrismaClient } = require("@prisma/client");
const app = express();
const prisma = new PrismaClient();

app.get("/comida", async (req, res) => {
  try {
    const comidas = await prisma.comida.findMany({});
    res.json(comidas);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al obtener comidas mascota" });
  }
});

app.post("/comida", async (req, res) => {
  const comidas = await prisma.comida.create({
    data: req.body,
  });
  res.json({
    message: "comida creado exitosamente",
    data: comidas,
  });
});

app.put("/comida/:id", async (req, res) => {
  const id = parseInt(req.params.id);
  try {
    const comidaUpdate = await prisma.comida.update({
      where: {
        id,
      },
      data: req.body,
    });

    res.json({
      message: "Successfully updated",
      data: comidaUpdate,
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
});

app.delete("/comida/:id", async (req, res) => {
  const id = parseInt(req.params.id);
  const comidasdelete = await prisma.comida.delete({
    where: {
      id,
    },
  });
  res.json({
    message: "successully delete",
    data: comidasdelete,
  });
});

module.exports = app;
