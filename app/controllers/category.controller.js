const db = require("../models");
const config = require("../config/db.config");
const Category = db.category;

const Op = db.Sequelize.Op;

var jwt = require("jsonwebtoken");

exports.createCategory = (req, res) => {


            if (req.body.name) {
                Category.findOne({
                    where: {
                        name: req.body.name
                    }
                })
                    .then(category => {
                            if (!category) {

                                // Save Category to Database
                                Category.create({
                                    name: req.body.name,
                                    description: req.body.description,
                                    active: req.body.active,

                                })
                                return res.status(200).send({message: "Categoria "})
                            }
                            else {

                                return res.status(404).send({message: "This category exist "});
                            }

                        }
                    )

            }
};

exports.getAllCategory=(req,res)=> {

    Category.findAll({

    })
        .then(category => {
                if (!category) {
                    return res.status(404).send({message: "category Not found."});
                }
                else {

                    return res.status(200).send({category});
                }

            }
        )


};


