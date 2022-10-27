module.exports = (app, con) => {

    app.get("/praticar", (req, res) => {
        res.render("desenhar.ejs")
    })
    app.get("/home", (req, res) => {
        res.render("paginaPrincipal.ejs")
    })
    
}