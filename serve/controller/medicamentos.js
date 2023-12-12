const express = require("express");
const { PrismaClient } = require("@prisma/client");
const app = express();
const prisma = new PrismaClient();

app.get("/medicamentos", async (req, res) => {
  try {
    const medicamentoss = await prisma.medicamentos.findMany({});
    res.json(medicamentoss);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al obtener medicamentos mascota" });
  }
});

app.post("/medicamentos", async (req, res) => {
  const medicamentoss = await prisma.medicamentos.create({
    data: req.body,
  });
  res.json({
    message: "medicamentos creado exitosamente",
    data: medicamentoss,
  });
});

app.put("/medicamentos/:id", async (req, res) => {
  const id = parseInt(req.params.id);
  try {
    const medicamentosUpdate = await prisma.medicamentos.update({
      where: {
        id,
      },
      data: req.body,
    });

    res.json({
      message: "Successfully updated",
      data: medicamentosUpdate,
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
});

app.delete("/medicamentos/:id", async (req, res) => {
  const id = parseInt(req.params.id);
  const medicamentossdelete = await prisma.medicamentos.delete({
    where: {
      id,
    },
  });
  res.json({
    message: "successully delete",
    data: medicamentossdelete,
  });
});

module.exports = app;
