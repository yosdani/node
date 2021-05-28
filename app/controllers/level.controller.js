const db = require("../models");
const config = require("../config/db.config");
const Level = db.level;

const Op = db.Sequelize.Op;

var jwt = require("jsonwebtoken");

exports.createLevel = (req, res) => {


    if (req.body.name) {
        Level.findOne({
            where: {
                name: req.body.name
            }
        })
            .then(level => {
                    if (!level) {

                        // Save Category to Database
                        Level.create({
                            name: req.body.name,
                            description: req.body.description,
                            active: req.body.active,

                        })
                        return res.status(200).send({message: "Level"})
                    }
                    else {

                        return res.status(404).send({message: "This level exist "});
                    }

                }
            )

    }
};

exports.getAllLevel=(req,res)=> {

    Level.findAll({

    })
        .then(level => {
                if (!level) {
                    return res.status(404).send({message: "level Not found."});
                }
                else {

                    return res.status(200).send({level});
                }

            }
        )


};


exports.updateLevel = (req, res) => {


    if (req.body.name) {
        Level.findOne({
            where: {
                id: req.body.id
            }
        })
            .then(level => {
                    if (level) {

                        // update Category to Database

                        level.update({
                            name: req.body.name,
                            description: req.body.description,
                            active: req.body.active,
                        })
                        return res.status(200).send({message: "Level updated successfully! "});
                    }
                    else {

                        return res.status(404).send({message: "This level not exist "});
                    }

                }
            )

    }
};
