"use strict";
const { Model } = require("sequelize");
const Joi = require('joi')

module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Post.belongsTo(models.User, {
        as: "user",
        foreignKey: {
          name: "userId",
          allowNull: false,
        },
      });

    //   Post.hasMany(models.Signer, {
    //     foreignKey: {
    //       name: "PostId",
    //       allowNull: false,
    //     },
    //   });
      
        }
  }
  Post.init(
    {
      userId: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      title: {
        allowNull: false,
        type: DataTypes.STRING,
        validate: {
          notNull: true,
          notEmpty: {
            msg: "Please fill out the mandatory fields", //"Please enter First Name",
          },
        }
      },
      description: {
        allowNull: false,
        type: DataTypes.STRING,
        validate: {
          notNull: true,
          notEmpty: {
            msg: "Please fill out the mandatory fields", //"Please enter First Name",
          },
        }
      },
      image: {
        allowNull: false,
        type: DataTypes.STRING,
        validate: {
          notNull: true,
          notEmpty: {
            msg: "Please fill out the mandatory fields", //"Please enter First Name",
          },
        }
      }
    },
    {
      sequelize,
      modelName: "Post",
    }
  );
  return Post;
};



module.exports.validatePost = (post) => {
    const validator = Joi.object().keys({
        // userId: Joi.number().required().label("User Id"),
        title: Joi.string().required().label('Title'),
        description: Joi.string().required().label('Description'),
        image: Joi.string().required().label('Image'),
    });
    return validator.validate(post, { abortEarly: false, });
  }