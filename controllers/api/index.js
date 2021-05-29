const router = require("express").Router();
const userRoutes = require("./users");

router.use("/users/", userRoutes);

// fetch(/api/users/login)

module.exports = router;