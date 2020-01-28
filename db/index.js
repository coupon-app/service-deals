import mysql from 'mysql';
import mysqlConfig from './config';

const connection = mysql.createConnection(mysqlConfig);

connection.connect((err) => {
  if (err) {
    console.log('There was an error connecting to the database.');
  } else {
    console.log('Successful connection to database!');
  }
});

// Get method query from database
