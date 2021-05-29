const router = require("express").Router();

const {User} = require("../../models");

router.post("/login", (req, res) => {
    // 1. Find the user by username
    // 2. Compare the password to the stored password
    User.findOne({
        where: {
            username: req.body.username
        }
    }).then(dbUser => {
        if (!dbUser) {
            res.json({message: "No User with that Name"})
        }
        else if (dbUser.password === req.body.password) {
            req.session.save(() => {
                req.session.userId = dbUser.id;
                req.session.loggedIn = true;
                console.log("LOGIN ROUTE SUCCESSFUL, HERE'S THE SESSION:");
                console.log(req.session);
                res.redirect("/");
            });
        }
        else {
            res.json({message: "WRONG!"});
        }
    }).catch(err => res.json(err));
});

router.post("/signup", (req, res) => {
    User.create(req.body)
    .then(dbUser => {
        res.json(dbUser);
    }).catch(err => res.json(err));
});

router.get("/logout", (req, res) => {
    req.session.destroy();

    res.redirect("/");
});

router.get("/session", (req, res) => {
    res.json(req.session);
})

module.exports = router;