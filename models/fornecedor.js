'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Fornecedor extends Model {
    static associate(models) {
      // Um fornecedor pode fornecer vários produtos
      Fornecedor.hasMany(models.Produto, { foreignKey: 'fornecedorId' });
    }
  }
  Fornecedor.init({
    nome: DataTypes.STRING,
    contato: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Fornecedor',
  });
  return Fornecedor;
};