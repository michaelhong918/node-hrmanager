// Requiring our models
const db = require("../models");
const express = require('express');
const router = express.Router();

// Routes
// =============================================================

// GET route for login
router.post("/api/login", async (req, res, next) => {
    const User = await db.User.findOne({
        where: req.body,
        raw: true,
    })
    if (User) {
        req.session.user = User;
        res.json({ success: true })
    }
    else {
        res.status(401).send('Authentication failed');
    }
});

router.get('/logout', (req, res) => {
    req.session.destroy();
    res.redirect("login");
});

module.exports = router;