// Google Sheets Service - Will be connected later
class GoogleSheetsService {
  constructor() {
    this.spreadsheetId = process.env.GOOGLE_SPREADSHEET_ID;
    console.log('GoogleSheets service initialized');
  }

  async addWorkEntry(workData) {
    try {
      // TODO: Connect to actual Google Sheets
      console.log('Adding work entry to sheets:', workData);
      
      // Mock calculation for now
      const rates = {
        'Labor Only': 57.50,
        'Repair & Maintenance': 35.00,
        'Skid Steer': 115.00,
        'SnowPlow': 253.00,
        'Truck Needed': 75.00,
        'Equipment Parts': 0.00
      };
      
      const rate = rates[workData.workType] || 57.50;
      const amount = parseFloat(workData.hours) * rate;
      
      return { success: true, amount };
    } catch (error) {
      console.error('Error adding work entry:', error);
      return { success: false, message: error.message };
    }
  }

  async getUserAllowedLocations(technician) {
    // Mock data based on technician
    const permissions = {
      'Jim A. Paschis': [
        'Roads', 'StarHouse', 'StarHouse - Operations', 
        'StarHouse - Morningstar', 'StarHouse - Retreat Cabin'
      ],
      'Laura Brown': [
        'StarHouse', 'StarHouse - Website', 'StarHouse - Operations',
        'StarHouse Cleaning', 'Retreat Cabin Cleaning'
      ],
      'Ed Burns': [
        'Roads', 'StarHouse', 'StarHouse - Operations',
        'StarHouse - Morningstar', 'Chien Plow', 
        'Lila Tresemer - Farm', 'Sunshine Snow Removal'
      ]
    };
    
    return permissions[technician] || ['StarHouse'];
  }

  async getTechnicianStats(technician) {
    // Mock stats
    return {
      monthHours: '23.5',
      weekHours: '8.0',
      totalEntries: 15
    };
  }

  async getRecentWorkEntries(technician, limit = 10) {
    // Mock recent work
    return [
      {
        date: 'Aug 19, 2025',
        location: 'Roads',
        description: 'Snow removal',
        hours: 4.0,
        workType: 'SnowPlow'
      },
      {
        date: 'Aug 18, 2025',
        location: 'StarHouse',
        description: 'General maintenance',
        hours: 2.5,
        workType: 'Labor Only'
      }
    ];
  }

  async getTechnicians() {
    return ['Jim A. Paschis', 'Laura Brown', 'Ed Burns'];
  }

  async getWorkTypes() {
    return [
      { name: 'Labor Only', rate: 57.50 },
      { name: 'Repair & Maintenance', rate: 35.00 },
      { name: 'Skid Steer', rate: 115.00 },
      { name: 'SnowPlow', rate: 253.00 },
      { name: 'Truck Needed', rate: 75.00 },
      { name: 'Equipment Parts', rate: 0.00 }
    ];
  }
}

module.exports = new GoogleSheetsService();
