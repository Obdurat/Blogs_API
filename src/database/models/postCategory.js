const { DataTypes } = require("sequelize");

const Attributes = {
  postId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    unique: true,
  },
  categoryId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    unique: true,
  },
};

module.exports = (sequelize) => {
  const PostCategory = sequelize.define("PostCategory", Attributes, {
    timestamps: false,
    tableName: "PostCategory",
  });

  PostCategory.associate = (models) => {
    models.Category.belongsToMany(models.BlogPost);
    models.BlogPost.belongsToMany(models.Category);
  };

  return PostCategory;
};
