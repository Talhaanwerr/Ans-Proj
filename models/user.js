'use strict';
const { Model } = require('sequelize');
const Joi = require('joi')

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    userName: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        notNull: true,
        notEmpty: {
          msg: "Please fill out the mandatory fields", //"Please enter First Name",
        },
      }
    },
    fullName: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        notNull: true,
        notEmpty: {
          msg: "Please fill out the mandatory fields", //"Please enter First Name",
        },
      }
    },
    email: {
      allowNull: false,
      type: DataTypes.STRING,
      unique: true,
      validate: {
        notNull: true,
        notEmpty: {
          msg: "Please fill out the mandatory fields", //"Please enter First Name",
        },
        isEmail: {
          msg: "Incorrect email address",
        },
      }
    },
    password: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        len: {
          args: [[8, 100]],
          msg: "minimum of 8 characters are required.",
        },
        notNull: true,
        notEmpty: {
          msg: "Please fill out the mandatory fields", //"Please enter First Name",
        },
      }
    },
    dob: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        notNull: true,
        notEmpty: {
          msg: "Please fill out the mandatory fields", //"Please enter First Name",
        },
      }
    },
    country: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        notNull: true,
        notEmpty: {
          msg: "Please fill out the mandatory fields", //"Please enter First Name",
        },
      }
    },
    division: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        notNull: true,
        notEmpty: {
          msg: "Please fill out the mandatory fields", //"Please enter First Name",
        },
      }
    },
    team: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        notNull: true,
        notEmpty: {
          msg: "Please fill out the mandatory fields", //"Please enter First Name",
        },
      }
    },
    level: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        notNull: true,
        notEmpty: {
          msg: "Please fill out the mandatory fields", //"Please enter First Name",
        },
      }
    },
    season: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        notNull: true,
        notEmpty: {
          msg: "Please fill out the mandatory fields", //"Please enter First Name",
        },
      }
    },
    position: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        notNull: true,
        notEmpty: {
          msg: "Please fill out the mandatory fields", //"Please enter First Name",
        },
      }
    },
    goal: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        notNull: true,
        notEmpty: {
          msg: "Please fill out the mandatory fields", //"Please enter First Name",
        },
      }
    },
    numberOfplayedMatches: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        notNull: true,
        notEmpty: {
          msg: "Please fill out the mandatory fields", //"Please enter First Name",
        },
      }
    },
    yellowCard: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        notNull: true,
        notEmpty: {
          msg: "Please fill out the mandatory fields", //"Please enter First Name",
        },
      }
    },
    redCard: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        notNull: true,
        notEmpty: {
          msg: "Please fill out the mandatory fields", //"Please enter First Name",
        },
      }
    },
    height: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        notNull: true,
        notEmpty: {
          msg: "Please fill out the mandatory fields", //"Please enter First Name",
        },
      }
    },
    weight: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        notNull: true,
        notEmpty: {
          msg: "Please fill out the mandatory fields", //"Please enter First Name",
        },
      }
    },


  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};

exports.validateUser = (user) => {
  const validator = Joi.object().keys({
    firstName: Joi.string().required().label("First Name"),
    lastName: Joi.string().required().label('Last Name'),
    email: Joi.string().email().required().label('Email'),
    role: Joi.string().label("Role"),
    password: Joi.string().required().label('Password'),
    phone: Joi.string().optional().label('Phone'),
    company: Joi.string().optional().label('Company'),
  });
  return validator.validate(user, { abortEarly: false, });
}

// exports.validateUser = validateUser