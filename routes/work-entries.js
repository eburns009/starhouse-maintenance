const express = require('express');
const router = express.Router();
const { requireAuth } = require('./auth');

// Work entry form
router.get('/entry', requireAuth, (req, res) => {
  const technician = req.session.technician;
  const allowedLocations = [
    'Roads', 'StarHouse', 'StarHouse - Operations', 
    'StarHouse - Morningstar', 'StarHouse Cleaning'
  ];
  const workTypes = [
    { name: 'Labor Only', rate: 57.50 },
    { name: 'Repair & Maintenance', rate: 35.00 },
    { name: 'Skid Steer', rate: 115.00 },
    { name: 'SnowPlow', rate: 253.00 },
    { name: 'Truck Needed', rate: 75.00 }
  ];

  res.render('timeEntry', {
    title: 'Add Work Time',
    technician,
    allowedLocations,
    workTypes,
    success: req.query.success,
    error: req.query.error
  });
});

// Handle work entry submission
router.post('/entry', requireAuth, (req, res) => {
  const { date, location, workType, hours, description } = req.body;
  
  if (!date || !location || !workType || !hours || !description) {
    return res.redirect('/work/entry?error=Please fill in all fields');
  }

  // TODO: Save to Google Sheets here
  console.log('Work entry:', { 
    technician: req.session.technician,
    date, location, workType, hours, description 
  });

  res.redirect('/work/entry?success=Work entry saved successfully!');
});

module.exports = router;
