// Requiring our models
const db = require("../models");
const express = require('express');
const router = express.Router();

// Routes
// =============================================================

// GET route for getting all of the manager
router.get("/api/managers", (req, res, next) => {
    db.Manager.findAll({
        where: {},
    }).then((dbManager) => {
        res.json(dbManager);
    }).catch((err) => {
        return next(err)
    });
});

// Get rotue for retrieving a single department
router.get("/api/managers/:id", (req, res, next) => {
    db.Manager.findOne({
        where: {
            id: req.params.id,
        },
    }).then((dbManager) => {
        res.json(dbManager);
    }).catch((err) => {
        return next(err)
    });
});

// POST route for saving a new manager
router.post("/api/managers", (req, res, next) => {
    db.Manager.create(req.body).then((dbManager) => {
        res.json(dbManager);
    }).catch((err) => {
        return next(err)
    });
});

// PUT route for updating manager
router.put("/api/managers/:id", (req, res, next) => {
    db.Manager.update(
        req.body, {
        where: {
            id: req.params.id
        }
    }).then((dbManager) => {
        res.json(dbManager);
    }).catch((err) => {
        return next(err)
    });
});

// DELETE route for deleting manager
router.delete("/api/managers/:id", function (req, res, next) {
    db.Manager.destroy({
        where: {
            id: req.params.id
        }
    }).then((dbManager) => {
        res.json(dbManager);
    }).catch((err) => {
        return next(err)
    });
});

module.exports = router;