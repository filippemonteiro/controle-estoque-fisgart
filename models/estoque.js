'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Estoque extends Model {
    static associate(models) {
      // O estoque pertence a um produto
      Estoque.belongsTo(models.Produto, { foreignKey: 'produtoId' });
    }
  }
  
  Estoque.init({
    produtoId: DataTypes.INTEGER,
    quantidade: DataTypes.INTEGER,
    localizacao: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Estoque',
  });
  return Estoque;
};