"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Movie extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.User);
    }
  }
  Movie.init(
    {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            args: true,
            msg: "Title can not be null",
          },
          notEmpty: {
            args: true,
            msg: "Title can not be empty",
          },
        },
      },
      genre: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            args: true,
            msg: "Genre can not be null",
          },
          notEmpty: {
            args: true,
            msg: "Genre can not be empty",
          },
        },
      },
      imageUrl: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            args: true,
            msg: "Image can not be null",
          },
          notEmpty: {
            args: true,
            msg: "Image can not be empty",
          },
        },
      },
      releasedYear: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            args: true,
            msg: "Release year can not be null",
          },
          notEmpty: {
            args: true,
            msg: "Release year can not be empty",
          },
        },
      },
      status: {
        type: DataTypes.ENUM("Released", "In Production"),
        allowNull: false,
        validate: {
          notNull: {
            args: true,
            msg: "Status can not be null",
          },
          notEmpty: {
            args: true,
            msg: "Status can not be empty",
          },
          isIn: {
            args: [["Released", "In Production"]],
            msg: "Status must between 'Released' or 'In Production'",
          },
        },
      },
      UserId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notNull: {
            args: true,
            msg: "User Id can not be null",
          },
        },
      },
    },
    {
      sequelize,
      modelName: "Movie",
    }
  );
  return Movie;
};
