const { DataTypes } = require("sequelize");

const Attributes = {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
  },
};

module.exports = (sequelize) => {
  const Category = sequelize.define("Category", Attributes, {
    timestamps: false,
    tableName: "Categories",
  });

  Category.associate = (models) => {
    // Category.belongsToMany(models.BlogPost, { through: models.PostCategory });
  };

  return Category;
};
