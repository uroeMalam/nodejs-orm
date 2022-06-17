const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('departments', {
    department_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    department_name: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    location_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'locations',
        key: 'location_id'
      }
    }
  }, {
    sequelize,
    tableName: 'departments',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "departments_pkey",
        unique: true,
        fields: [
          { name: "department_id" },
        ]
      },
    ]
  });
};
