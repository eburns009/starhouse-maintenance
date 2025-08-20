const express = require('express');
const router = express.Router();

// Login page
router.get('/login', (req, res) => {
  const technicians = ['Jim A. Paschis', 'Laura Brown', 'Ed Burns'];
  res.render('login', { title: 'Login', technicians, error: req.query.error });
});

// Handle login
router.post('/login', (req, res) => {
  const { technician } = req.body;
  req.session.technician = technician;
  res.redirect('/work/entry');
});

// Logout
router.get('/logout', (req, res) => {
  req.session.destroy();
  res.redirect('/auth/login');
});

// Auth middleware
function requireAuth(req, res, next) {
  if (req.session.technician) next();
  else res.redirect('/auth/login');
}

router.requireAuth = requireAuth;
module.exports = router;
