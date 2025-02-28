'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class MovimentacaoEstoque extends Model {
    static associate(models) {
      // A movimentação de estoque pertence a um produto
      MovimentacaoEstoque.belongsTo(models.Produto, { foreignKey: 'produtoId' });
    }
  }
  
  MovimentacaoEstoque.init({
    produtoId: DataTypes.INTEGER,
    quantidade: DataTypes.INTEGER,
    tipo: DataTypes.STRING,
    data: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'MovimentacaoEstoque',
  });
  return MovimentacaoEstoque;
};