const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('projects', {
    proj_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    proj_name: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    proj_createdon: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    proj_duedate: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    proj_cust_name: {
      type: DataTypes.STRING,
      allowNull: true
    },
    proj_description: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    proj_status: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    proj_amount: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    proj_account_mgr: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'employees',
        key: 'employee_id'
      }
    }
  }, {
    sequelize,
    tableName: 'projects',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "projects_pkey",
        unique: true,
        fields: [
          { name: "proj_id" },
        ]
      },
    ]
  });
};
