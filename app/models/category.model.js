// const db = require("../models");
const config = require("../config/db.config");
module.exports = (sequelize, Sequelize) => {
    const Category = sequelize.define("categories", {
        name: {
            type: Sequelize.STRING
        },
       active: {
            type: Sequelize.BOOLEAN
        },
        description: {
            type: Sequelize.STRING
        },

    });

    return Category;
};

