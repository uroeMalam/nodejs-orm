const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('jobs', {
    job_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    job_title: {
      type: DataTypes.STRING(35),
      allowNull: false
    },
    min_salary: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    max_salary: {
      type: DataTypes.DECIMAL,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'jobs',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "jobs_pkey",
        unique: true,
        fields: [
          { name: "job_id" },
        ]
      },
    ]
  });
};
