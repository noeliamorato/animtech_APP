const express = require("express");
const { PrismaClient } = require("@prisma/client");
const app = express();
const prisma = new PrismaClient();

app.get("/nutricionmascota", async (req, res) => {
  try {
    const nutricionmascotas = await prisma.nutricionmascota.findMany({});
    res.json(nutricionmascotas);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al obtener nutricionmascota mascota" });
  }
});

app.post("/nutricionmascota", async (req, res) => {
  const nutricionmascotas = await prisma.nutricionmascota.create({
    data: req.body,
  });
  res.json({
    message: "nutricionmascota creado exitosamente",
    data: nutricionmascotas,
  });
});

app.put("/nutricionmascota/:id", async (req, res) => {
  const id = parseInt(req.params.id);
  try {
    const nutricionmascotaUpdate = await prisma.nutricionmascota.update({
      where: {
        id,
      },
      data: req.body,
    });

    res.json({
      message: "Successfully updated",
      data: nutricionmascotaUpdate,
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
});

app.delete("/nutricionmascota/:id", async (req, res) => {
  const id = parseInt(req.params.id);
  const nutricionmascotasdelete = await prisma.nutricionmascota.delete({
    where: {
      id,
    },
  });
  res.json({
    message: "successully delete",
    data: nutricionmascotasdelete,
  });
});

module.exports = app;
