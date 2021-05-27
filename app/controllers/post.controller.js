const db = require("../models");
const config = require("../config/db.config");
const Post = db.post;

const Op = db.Sequelize.Op;

var jwt = require("jsonwebtoken");

exports.createPost = (req, res) => {


    if (req.body.name) {
        Post.findOne({
            where: {
                name: req.body.name
            }
        })
            .then(post => {
                    if (!post) {

                        // Save Post to Database
                        Post.create({
                            name: req.body.name,
                            description: req.body.description,
                            phone: req.body.phone,
                            content: req.body.content,
                            images: req.body.images,
                            idCategory: req.body.idCategory,

                        })
                        return res.status(200).send({message: "Post registered successfully!"})
                    }
                    else {

                        return res.status(404).send({message: "This Post exist "});
                    }

                }
            )

    }
};

exports.getAllPost=(req,res)=> {

    Post.findAll({

    })
        .then(post => {
                if (!post) {
                    return res.status(404).send({message: "Post not found."});
                }
                else {

                    return res.status(200).send({post});
                }

            }
        )


};


