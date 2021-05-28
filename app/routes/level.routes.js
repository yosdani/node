const { authJwt } = require("../middleware");
const controller = require("../controllers/level.controller");

module.exports = function(app) {
    app.use(function(req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });

    app.post(
        [authJwt.verifyToken,authJwt.isAdmin],
        "/api/createLevel",
        [
            controller.createLevel

        ]
    );
    app.post(
        "/api/updateLevel",
        [authJwt.verifyToken,authJwt.isAdmin],
        [
            controller.updateLevel

        ]
    );

};
