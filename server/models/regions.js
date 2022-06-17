const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('regions', {
    region_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    region_name: {
      type: DataTypes.STRING(25),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'regions',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "regions_pkey",
        unique: true,
        fields: [
          { name: "region_id" },
        ]
      },
    ]
  });
};
