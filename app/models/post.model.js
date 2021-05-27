// const db = require("../models");
const config = require("../config/db.config");
module.exports = (sequelize, Sequelize) => {
    const Post = sequelize.define("post", {
        name: {
            type: Sequelize.STRING
        },
        phone: {
            type: Sequelize.STRING
        },
        description: {
            type: Sequelize.STRING
        },
        content: {
            type: Sequelize.STRING
        },
        images: {
            type: Sequelize.STRING
        },
        idCategory: {
            type: Sequelize.INTEGER
        }



    });

    return Post;
};