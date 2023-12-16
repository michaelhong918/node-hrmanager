'use strict';
module.exports = function (sequelize, DataTypes) {
  var Manager = sequelize.define("Manager", {
    // Giving the Manager model a name of type STRING
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    firstname: { type: DataTypes.STRING, allowNull: false },
    lastname: { type: DataTypes.STRING, allowNull: false },
    department: { type: DataTypes.STRING, allowNull: false, unique: true },
  }, {
    sequelize,
    modelName: 'Manager'
  });

  Manager.associate = function (models) {
    // Associating Manager with Posts
    // When an Manager is deleted, also delete any associated Posts
    Manager.hasMany(models.Employee, { foreignKey: 'managerId' });
  };

  return Manager;
};
