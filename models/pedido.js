'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pedido extends Model {
    static associate(models) {
      // Um pedido pertence a um cliente
      Pedido.belongsTo(models.Cliente, { foreignKey: 'clienteId' });

      // Um pedido pode ter vários produtos
      Pedido.belongsToMany(models.Produto, {
        through: models.ItemPedido,
        foreignKey: 'pedidoId',
      });
    }
  }
  
  Pedido.init({
    clienteId: DataTypes.INTEGER,
    data: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Pedido',
  });
  return Pedido;
};