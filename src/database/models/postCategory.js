const { DataTypes } = require("sequelize");

const Attributes = {
  postId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  categoryId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
};

module.exports = (sequelize) => {
  const PostCategory = sequelize.define("PostCategory", Attributes, {
    timestamps: false,
    tableName: "PostCategory",
  });

  PostCategory.associate = (models) => {
    models.Category.belongsToMany(models.BlogPost, { through: models.PostCategory });
    models.BlogPost.belongsToMany(models.Category, { through: models.PostCategory });
  };

  return PostCategory;
};
