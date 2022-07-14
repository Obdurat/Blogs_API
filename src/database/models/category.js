const { DataTypes } = require("sequelize");

const Attributes = {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    unique: true,
  },
  name: {
    type: DataTypes.STRING,
  },
};

module.exports = (sequelize) => {
  const Category = sequelize.define("Category", Attributes, {
    timestamps: false,
    tableName: "Category",
  });

  Category.associate = (models) => {
    Category.belongsToMany(models.BlogPost, { through: models.PostCategory });
  };

  return Category;
};
