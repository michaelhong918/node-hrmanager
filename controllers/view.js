// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
const router = require('express').Router();
const moment = require("moment");
const db = require("../models");
const { auth } = require("./middleware/auth")

// Routes
// =============================================================

// Each of the below routes just handles the HTML page that the user gets sent to.
router.route('/login').get(renderLogin);

router.route('/').get(auth, renderEmployees);

router.route('/employee').get(auth, renderEmployees);
router.route('/employee/create').get(auth, renderEmployeeCreate);
router.route('/employee/:id').get(auth, renderEmployeeEdit);

router.route('/manager').get(auth, renderManagers);
router.route('/manager/create').get(auth, renderManagerCreate);
router.route('/manager/:id').get(auth, renderManagerEdit);

// Display login
function renderLogin(req, res) {
  if (req.session.user) {
    res.redirect('/employee')
  }
  else {
    res.render('login')
  }
}

// Display all employees table
function renderEmployees(req, res) {
  db.Employee.findAll({
    where: {},
    include: [db.Manager],
    raw: true,
    order: [['id', 'ASC']]
  }).then((employees) => {
    const data = employees.map((employee, index) => ({
      ...employee,
      no: index + 1,
      status: employee.status ? "Regular" : "Otherwise",
      hireDate: moment(employee.hireDate).format("MMM Do YYYY"),
      terminateDate: employee.terminateDate ? moment(employee.terminateDate).format("MMM Do YYYY") : 'N/A'
    }))
    res.render('employees', { employees: data, user: req.session.user })
  });
}

// Display employee craete form
function renderEmployeeCreate(req, res) {
  db.Manager.findAll().then((managers) => {
    res.render('employee', { managers, user: req.session.user });
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
        terminateDate: employee.terminateDate ? moment(employee.terminateDate).format("YYYY-MM-DD") : null
      }
      res.render('employee', { employee: data, managers, user: req.session.user });
    })
  });
}

// Display all managers table
function renderManagers(req, res) {
  db.Manager.findAll({
    raw: true,
    order: [['id', 'ASC']]
  }).then((managers) => {
    const data = managers.map((manager, index) => ({
      ...manager,
      no: index + 1,
      createdAt: moment(manager.createdAt).format('MMM Do YYYY')
    }))
    res.render('managers', { managers: data, user: req.session.user })
  });
}

// Display manager create form
function renderManagerCreate(req, res) {
  res.render('manager', { user: req.session.user });
}

// Display manager edit form
function renderManagerEdit(req, res) {
  db.Manager.findOne({
    where: {
      id: req.params.id,
    },
  }).then((manager) => {
    res.render('manager', { manager, user: req.session.user });
  });
}

module.exports = router;