// const { authJwt } = require("../middleware");

module.exports = function(app) {
    app.use(function (req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });


app.get('/:id',(req,res)=>{

    const {id}=req.params;

    console.log(id);

});

}