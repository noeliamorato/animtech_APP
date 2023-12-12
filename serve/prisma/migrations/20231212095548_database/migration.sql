-- CreateTable
CREATE TABLE "Comida" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "tipo" TEXT NOT NULL,
    "cantidad" TEXT,
    "calorias" TEXT,
    "proteinas" TEXT,
    "grasa" TEXT,
    "carbohidratos" TEXT,
    "azucar" TEXT,
    "vitaminas" TEXT[],

    CONSTRAINT "Comida_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Medicamentos" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "notas" TEXT,

    CONSTRAINT "Medicamentos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Desechos" (
    "id" SERIAL NOT NULL,
    "tipo" TEXT NOT NULL,
    "textura" TEXT NOT NULL,
    "color" TEXT,
    "olor" TEXT,

    CONSTRAINT "Desechos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Nutricionmascota" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "tipoAlimento" TEXT NOT NULL,
    "cantidad" TEXT,
    "horarios" TEXT,
    "observaciones" TEXT,

    CONSTRAINT "Nutricionmascota_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Mascotas" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "tipo" TEXT NOT NULL,
    "raza" TEXT,
    "peso" TEXT,
    "color" TEXT,
    "foto" TEXT,

    CONSTRAINT "Mascotas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Adiestramiento" (
    "id" SERIAL NOT NULL,
    "foto" TEXT,
    "titulo" TEXT,
    "cuerpo" TEXT,

    CONSTRAINT "Adiestramiento_pkey" PRIMARY KEY ("id")
);
