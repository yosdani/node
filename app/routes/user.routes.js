const {authJwt} = require("../middleware");
const controller = require("../controllers/user.controller");

module.exports = function (app) {
    app.use(function (req, res, next) {
        res.header(
            // "Access-Control-Allow-Headers",
            // "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });

    app.get("/api/test/all", controller.allAccess);

    app.get(
        "/api/test/user",
        [authJwt.verifyToken],
        controller.userBoard
    );
    app.get(
        "/api/showUser",
        [authJwt.verifyToken, authJwt.isAdmin],
        controller.showUser
    );

    app.get(
        "/api/users",
        [authJwt.verifyToken],
        controller.getUsers
    );
    app.get(
        "/api/members",
        [authJwt.verifyToken],
        controller.getMembers
    );
    app.post(
        "/api/updateUser",
        [authJwt.verifyToken],
        controller.updateUser
    );

    app.post(
        "/api/change-password",
        [authJwt.verifyToken],
        controller.changePassword
    );
};
