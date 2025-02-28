'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Produto extends Model {
    static associate(models) {
      // Um produto pertence a um fornecedor
      Produto.belongsTo(models.Fornecedor, { foreignKey: 'fornecedorId' });

      // Um produto pode estar em vários pedidos
      Produto.belongsToMany(models.Pedido, {
        through: models.ItemPedido,
        foreignKey: 'produtoId',
      });
      
      // Um produto pode tem um estoque
      Produto.hasOne(models.Estoque, { foreignKey: 'produtoId' });

      // Um produto pode ter várias movimentações de estoque
      Produto.hasMany(models.MovimentacaoEstoque, { foreignKey: 'produtoId' });
    }
  }

  Produto.init({
    nome: DataTypes.STRING,
    descricao: DataTypes.STRING,
    preco: DataTypes.DECIMAL
  }, {
    sequelize,
    modelName: 'Produto',
  });
  return Produto;
};