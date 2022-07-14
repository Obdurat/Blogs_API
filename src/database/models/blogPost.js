const { DataTypes } = require('sequelize');

const Attributes = {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    },
    title: {
        type: DataTypes.STRING,
    },
    content: {
        type: DataTypes.STRING,
    },
    userId: {
        type: DataTypes.INTEGER,        
    },
    published: {
        type: DataTypes.DATE,
    },
    updated: {
        type: DataTypes.DATE,
    },
}

module.exports = (sequelize) => {
    const BlogPost = sequelize.define("BlogPost", Attributes, {
      timestamps: false,
      tableName: "BlogPosts",
    });
  
    BlogPost.associate = (models) => {        
        BlogPost.belongsTo(models.User, { foreignKey: 'userId', onDelete: "CASCADE", onUpdate: "CASCADE" });
    };
  
    return BlogPost;
  };