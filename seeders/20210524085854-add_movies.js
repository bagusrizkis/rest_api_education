"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Movies",
      [
        {
          title: "Spider-Man: Far from Home",
          genre: "Action",
          imageUrl:
            "https://www.themoviedb.org/t/p/w1280/4q2NNj4S5dG2RLF9CpXsej7yXl.jpg",
          releasedYear: "2019",
          status: "Released",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Batman v Superman: Dawn of Justice",
          genre: "Action",
          imageUrl:
            "https://www.themoviedb.org/t/p/w1280/5UsK3grJvtQrtzEgqNlDljJW96w.jpg",
          releasedYear: "2016",
          status: "Released",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Habibie & Ainun",
          genre: "Drama",
          imageUrl:
            "https://www.themoviedb.org/t/p/w1280/eOdYhBFF7vE5v83KVVQfDEyLgEu.jpg",
          releasedYear: "2012",
          status: "Released",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Movies", null, {});
  },
};
