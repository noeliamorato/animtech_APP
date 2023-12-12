const express = require("express");
const { PrismaClient } = require("@prisma/client");
const app = express();
const prisma = new PrismaClient();

app.get("/adiestramiento", async (req, res) => {
  try {
    const adiestramientos = await prisma.adiestramiento.findMany({});
    res.json(adiestramientos);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al obtener adiestramientos mascota" });
  }
});

app.post("/adiestramiento", async (req, res) => {
  const adiestramientos = await prisma.adiestramiento.create({
    data: req.body,
  });
  res.json({
    message: "adiestramiento creado exitosamente",
    data: adiestramientos,
  });
});

app.put("/adiestramiento/:id", async (req, res) => {
  const id = parseInt(req.params.id);
  try {
    const adiestramientoUpdate = await prisma.adiestramiento.update({
      where: {
        id,
      },
      data: req.body,
    });

    res.json({
      message: "Successfully updated",
      data: adiestramientoUpdate,
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
});

app.delete("/adiestramiento/:id", async (req, res) => {
  const id = parseInt(req.params.id);
  const adiestramientosdelete = await prisma.adiestramiento.delete({
    where: {
      id,
    },
  });
  res.json({
    message: "successully delete",
    data: adiestramientosdelete,
  });
});

module.exports = app;
