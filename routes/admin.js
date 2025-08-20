const express = require('express');
const router = express.Router();

// Admin dashboard
router.get('/', (req, res) => {
  // Mock admin data
  const stats = {
    totalHours: '142.5',
    roadsInvoice: '$8,450',
    activeTechs: 3
  };
  
  const invoiceBreakdown = {
    roads: {
      starhouse: { percentage: 52, amount: 4394.00 },
      hirsh: { percentage: 15, amount: 1267.50 },
      dobson: { percentage: 9, amount: 760.50 },
      tresemer: { percentage: 13, amount: 1098.50 },
      chien: { percentage: 11, amount: 929.50 },
      total: 8450.00
    },
    separate: {
      chienPlow: 2350.00,
      lilaTresemer: 1420.00
    }
  };

  res.render('admin', {
    title: 'Admin Dashboard',
    stats,
    invoiceBreakdown
  });
});

// Generate invoices endpoint
router.post('/generate-invoices', (req, res) => {
  const { month } = req.body;
  
  // TODO: Connect to Google Sheets and generate actual invoices
  console.log('Generating invoices for month:', month);
  
  res.json({ 
    success: true, 
    message: `Invoices generated for ${month}` 
  });
});

module.exports = router;
