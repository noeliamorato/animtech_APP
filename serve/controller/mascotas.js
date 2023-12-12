const express = require("express");
const { PrismaClient } = require("@prisma/client");
const app = express();
const prisma = new PrismaClient();

app.get("/mascotas", async (req, res) => {
  try {
    const mascotass = await prisma.mascotas.findMany({});
    res.json(mascotass);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al obtener mascotass mascota" });
  }
});

app.post("/mascotas", async (req, res) => {
  const mascotass = await prisma.mascotas.create({
    data: req.body,
  });
  res.json({
    message: "mascotas creado exitosamente",
    data: mascotass,
  });
});

app.put("/mascotas/:id", async (req, res) => {
  const id = parseInt(req.params.id);
  try {
    const mascotasUpdate = await prisma.mascotas.update({
      where: {
        id,
      },
      data: req.body,
    });

    res.json({
      message: "Successfully updated",
      data: mascotasUpdate,
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
});

app.delete("/mascotas/:id", async (req, res) => {
  const id = parseInt(req.params.id);
  const mascotassdelete = await prisma.mascotas.delete({
    where: {
      id,
    },
  });
  res.json({
    message: "successully delete",
    data: mascotassdelete,
  });
});

module.exports = app;
