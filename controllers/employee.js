// Requiring our models
const db = require("../models");
const express = require('express');
const router = express.Router();

// Routes
// =============================================================

// GET route for getting all of the employees
router.get("/api/employees", (req, res, next) => {
  db.Employee.findAll({
    where: {},
    include: [db.Manager]
  }).then((dbEmployee) => {
    res.json(dbEmployee);
  }).catch((err) => {
    return next(err)
  });
});

// Get rotue for retrieving a single employee
router.get("/api/employees/:id", (req, res, next) => {
  db.Employee.findOne({
    where: {
      id: req.params.id,
    },
    include: [db.Manager]
  }).then((dbEmployee) => {
    res.json(dbEmployee);
  }).catch((err) => {
    return next(err)
  });
});

// POST route for saving a new employee
router.post("/api/employees", (req, res, next) => {
  db.Employee.create(req.body).then((dbEmployee) => {
    res.json(dbEmployee);
  }).catch((err) => {
    return next(err)
  });
});

// PUT route for updating employee
router.put("/api/employees/:id", (req, res, next) => {
  db.Employee.update(
    req.body, {
    where: {
      id: req.params.id
    }
  }).then((dbEmployee) => {
    res.json(dbEmployee);
  }).catch((err) => {
    return next(err)
  });
});

// DELETE route for deleting employee
router.delete("/api/employees/:id", function (req, res, next) {
  db.Employee.destroy({
    where: {
      id: req.params.id
    }
  }).then(() => {
    res.json({ success: true });
  }).catch((err) => {
    return next(err)
  });
});

module.exports = router;