const router = require("express").Router();
const db = require("../../models");

router.get("/", (req, res) => {
    // res.sendFile("index.html");
    res.render("home",
    {
        defaultLayout: "main",
        loggedIn: req.session.loggedIn
    });
});

router.get("/post/:id", (req, res) => {
    res.render("post");
});

router.get("/login", (req, res) => {
    res.render("login");
})

module.exports = router;