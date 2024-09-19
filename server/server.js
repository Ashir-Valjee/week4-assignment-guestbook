// access express,cors,pg,dotenv
import express from "express";
import cors from "cors";
import pg from "pg";
import dotenv from "dotenv";

// initialise express
const app = express();

// configure dotenv
dotenv.config();

// tell my express app to use json
app.use(express.json());

//tell my express app to use cors
app.use(cors());

// i need to set up a PORT for my app to listen
const PORT = 8080;
app.listen(PORT, () => {
  console.log(`server is running in PORT ${PORT}`);
});

// i need to set up my database pool using the connection string from the .env file
const dbConnectionString = process.env.DATABASE_URL;
export const db = new pg.Pool({
  connectionString: dbConnectionString,
});

// need to set up a a root route
app.get("/", (request, response) => {
  response.json({ message: "you are looking at my root route. how rude" });
});

// you need two routes minimum

// you need a route to READ database data
// you need a route to CREATE or ADD data
//! in your CREATE route,  the request.body is an object that represents the form data coming from your client

// you need to use SQL queries and parameters in these routes

// =============================

// in the .env file you need your database connection string with the correct password

// ============================
// for this assignment the minimum you need is one table to store feedback

app.get("/guests", async (request, response) => {
  const query = await db.query(`SELECT * FROM guests`);

  // we wrangle the query to get rows
  response.json(query.rows);
  console.log(query);
});

// whenever you need to specify data in your query do not write data directly. Use a parameter to replace
// the data
app.get("/guests2", async function (request, response) {
  const query = await db.query(`SELECT * FROM guests WHERE name=$1`, ["James"]);
  response.json(query.rows);
});
