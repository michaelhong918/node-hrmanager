// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
const router = require('express').Router();
const moment = require("moment");
const db = require("../models");

// Routes
// =============================================================

// Each of the below routes just handles the HTML page that the user gets sent to.
router.get('/login', renderLogin);

router.get('/', renderEmployees);

router.get('/employee', renderEmployees);
router.get('/employee/create', renderEmployeeCreate);
router.get('/employee/:id', renderEmployeeEdit);

router.get('/manager', renderManagers);
router.get('/manager/create', renderManagerCreate);
router.get('/manager/:id', renderManagerEdit);

// Display login
function renderLogin(_, res) {
  res.render('login')
}

// Display all employees table
function renderEmployees(_, res) {
  db.Employee.findAll({
    where: {},
    include: [db.Manager],
    raw: true
  }).then((employees) => {
    const data = employees.map((employee, index) => ({
      ...employee,
      no: index + 1,
      status: employee.status ? "Regular" : "Otherwise",
      hireDate: moment(employee.hireDate).format("MMM Do YYYY"),
      terminateDate: moment(employee.terminateDate).format("MMM Do YYYY")
    }))
    res.render('employees', { employees: data })
  });
}

// Display employee craete form
function renderEmployeeCreate(_, res) {
  db.Manager.findAll().then((managers) => {
    res.render('employee', { managers });
  });
}

// Display employee edit form
function renderEmployeeEdit(req, res) {
  db.Employee.findOne({
    where: {
      id: req.params.id,
    },
    include: [db.Manager],
    raw: true
  }).then((employee) => {
    db.Manager.findAll().then((managers) => {
      const data = {
        ...employee,
        hireDate: moment(employee.hireDate).format("YYYY-MM-DD"),
        terminateDate: moment(employee.terminateDate).format("YYYY-MM-DD")
      }
      res.render('employee', { employee: data, managers });
    })
  });
}

// Display all managers table
function renderManagers(_, res) {
  db.Manager.findAll({ raw: true }).then((managers) => {
    const data = managers.map((manager, index) => ({
      ...manager,
      no: index + 1,
      createdAt: moment(manager.createdAt).format('MMM Do YYYY')
    }))
    res.render('managers', { managers: data })
  });
}

// Display manager create form
function renderManagerCreate(_, res) {
  res.render('manager');
}

// Display manager edit form
function renderManagerEdit(req, res) {
  db.Manager.findOne({
    where: {
      id: req.params.id,
    },
  }).then((manager) => {
    res.render('manager', { manager });
  });
}

module.exports = router;