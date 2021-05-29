const express = require("express");
const app = express();
const exphbs = require("express-handlebars");
const PORT = process.env.PORT || 3000;
const path = require("path");
const hbs = exphbs.create();
const sequelize = require("./config/connection");
const {User, Post} = require("./models");

const session = require("express-session");
const SequelizeStore = require("connect-session-sequelize")(session.Store);

const sess = {
    secret: "I'm secretly a giant bug",
    cookie: {
        secure: false
    },
    resave: false,
    saveUninitialized: false,
    store: new SequelizeStore({
        db: sequelize
    })
}

const routes = require("./controllers");

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));
app.use(session(sess));

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use(routes);

app.listen(PORT, () => {
    sequelize.sync();
    console.log("We've connected to PORT " + PORT);
});