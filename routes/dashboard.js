const express = require('express');
const router = express.Router();
const { requireAuth } = require('./auth');

// Dashboard page
router.get('/', requireAuth, (req, res) => {
  const technician = req.session.technician;
  
  // Mock data for now - will connect to Google Sheets later
  const stats = {
    monthHours: '23.5',
    weekHours: '8.0',
    totalEntries: 15
  };
  
  const recentWork = [
    {
      date: 'Aug 19, 2025',
      location: 'Roads',
      description: 'Snow removal and salting',
      hours: 4.0
    },
    {
      date: 'Aug 18, 2025', 
      location: 'StarHouse',
      description: 'General maintenance',
      hours: 2.5
    },
    {
      date: 'Aug 17, 2025',
      location: 'StarHouse - Operations',
      description: 'Equipment check',
      hours: 1.5
    }
  ];

  res.render('dashboard', {
    title: 'Dashboard',
    technician,
    stats,
    recentWork
  });
});

module.exports = router;
