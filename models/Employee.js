'use strict';
module.exports = function (sequelize, DataTypes) {
  // 'Employee' in the define method, will be the name
  // of the table created in the db
  const Employee = sequelize.define("Employee", {
    // you do not need to define an id
    // sequelize does that for you
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    firstname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false
    },
    salary: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    position: {
      type: DataTypes.STRING,
      allowNull: false
    },
    status: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    managerId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      // references: {
      //   model: 'Manager',
      //   key: 'id'
      // }
    },
    hireDate: {
      type: DataTypes.DATE,
      allowNull: false
    },
    terminateDate: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Employee'
  });

  // set up associations if you want to use includes
  // when serving up json from your routes

  Employee.associate = function (models) {
    // We're saying that a Employee should belong to an Author
    // A Employee can't be created without an Author due to the foreign key constraint
    Employee.belongsTo(models.Manager, {
      foreignKey: 'managerId',
    });
  };

  return Employee;
};
