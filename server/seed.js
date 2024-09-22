// here you can CREATE your SQL queries and create table and dummy data
// create  tables with SQL and insert dummy data for testing purposes
// to seed a database is to manually insert data for testing purposes

// write a SQL query to create a new table
// we need to tell our server where to send the query
// the query method needs the argument to be a string

// i need to import db from server file
// i use {} to destructure just one element

import { db } from "./server.js";

// if we already have a table with the same name we need to make sure
// we dont create a new table with the same name

db.query(`CREATE TABLE IF NOT EXISTS guests4 (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  date1 TEXT,
  review TEXT,
  email TEXT
);`);

// db.query(`CREATE TABLE IF NOT EXISTS guests (
//   id SERIAL PRIMARY KEY,
//   name TEXT,
//   date_of_visit DATE,
//   review TEXT
// );`);

// i want to insert data into the pets table

// db.query(`INSERT INTO guests (name,date_of_visit,review)
//   VALUES ('tom', '2024-04-30','great visit, wonderful service')`);

// db.query(`INSERT INTO guests3 (name,date1,review,email)
//   VALUES ('jim','2023-04-30','great service','jim@gmail.com')`);
