const express = require("express");
const { PrismaClient } = require("@prisma/client");
const app = express();
const prisma = new PrismaClient();

app.get("/desechos", async (req, res) => {
  try {
    const desechoss = await prisma.desechos.findMany({});
    res.json(desechoss);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al obtener desechoss mascota" });
  }
});

app.post("/desechos", async (req, res) => {
  const desechoss = await prisma.desechos.create({
    data: req.body,
  });
  res.json({
    message: "desechos creado exitosamente",
    data: desechoss,
  });
});

app.put("/desechos/:id", async (req, res) => {
  const id = parseInt(req.params.id);
  try {
    const desechosUpdate = await prisma.desechos.update({
      where: {
        id,
      },
      data: req.body,
    });

    res.json({
      message: "Successfully updated",
      data: desechosUpdate,
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
});

app.delete("/desechos/:id", async (req, res) => {
  const id = parseInt(req.params.id);
  const desechossdelete = await prisma.desechos.delete({
    where: {
      id,
    },
  });
  res.json({
    message: "successully delete",
    data: desechossdelete,
  });
});

module.exports = app;
