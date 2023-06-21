'use strict'
const mongoose = require('mongoose');
const { Schema } = mongoose;

const usuarioSchema = new Schema(
  {
    nome: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    senha: {
      type: String,
      required: true,
// Select: false,  linha inativa pois entra em conflito no insomnia


    },

  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model('usuarioModel', usuarioSchema);