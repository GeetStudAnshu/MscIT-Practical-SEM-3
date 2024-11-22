const connection = require('./database');

const insertData = (name, avbl_qty, price_per_unit) => {
  const query = 'INSERT INTO fruits (name, avbl_qty, price_per_unit) VALUES (?, ?, ?)';
  connection.query(query, [name, avbl_qty, price_per_unit], (err, results) => {
    if (err) {
      console.error('Error inserting data:', err);
      return;
    }
    console.log('Data inserted successfully:', results);
  });
};

// Example usage
insertData('Guava', 48, '60 Rs.');
