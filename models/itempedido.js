'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ItemPedido extends Model {
    static associate(models) {
      // Um item de pedido pertence a um pedido e a um produto
      ItemPedido.belongsTo(models.Pedido, { foreignKey: 'pedidoId' });
      ItemPedido.belongsTo(models.Produto, { foreignKey: 'produtoId' });
    }
  }
  
  ItemPedido.init({
    pedidoId: DataTypes.INTEGER,
    produtoId: DataTypes.INTEGER,
    quantidade: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'ItemPedido',
  });
  return ItemPedido;
};