const express = require('express');
const oracledb = require('oracledb');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());
const bcrypt=require('bcrypt');
const jwt = require("jsonwebtoken");

// 🔐 Oracle Database Connection Configuration
const dbConfig = {
  user: "goodreads",        // your Oracle username
  password: "Riyaz8688557396",   // your Oracle password
  connectString: "localhost/XEPDB1" // service name or TNS
};

// 🟢 API route to get all goodreads data
app.get('/api/books', async (request, response) => {
  let connection;
  try {
    connection = await oracledb.getConnection(dbConfig);
    let jwtToken;
    const authHeader=request.headers["authorization"];
    if (authHeader != undefined){
      jwtToken=authHeader.split(" ")[1]
    if (jwtToken===undefined){
      response.status(401);
    }else{
      jwt.verify(jwtToken,"qwertyuiop",async(error,user)=>{
        if(error){
          response.status(401);
          response.send("Invlid JWT Token ");
        }else{

          const result = await connection.execute(`SELECT title,
    authorId,
    rating,
    ratingCount,
    reviewCount
     FROM goodreads ORDER BY authorId`,[],{ outFormat: oracledb.OUT_FORMAT_OBJECT });


    console.log('Details Of goodreads:');
    console.table(result.rows);
    response.json(result.rows); 

        }

      });
    }
    }
      // send the rows as JSON
  } catch (err) {
    console.error(err);
    response.status(500).send('Database error');
  } finally {
    if (connection) {
      try {
        await connection.close();
      } catch (err) {
        console.error(err);
      }
    }
  }
});


//API route to login 
app.post("/login", async (request, response) => {
  const { username, password } = request.body;

  let connection;

  try {
    // Get Oracle connection
    connection = await oracledb.getConnection(dbConfig);

    // Use bind variables to prevent SQL Injection
    const selectUserQuery = `SELECT * FROM users WHERE username = :username`;
    const result = await connection.execute(selectUserQuery, [username], {
      outFormat: oracledb.OUT_FORMAT_OBJECT,
    });

    if (result.rows.length === 0) {
      response.status(400).send("Invalid User");
      return;
    }

    const dbUser = result.rows[0]; // row is returned as object due to OUT_FORMAT_OBJECT

    // Compare password using bcrypt
    const isPasswordMatched = await bcrypt.compare(password, dbUser.PASSWORD);

    if (isPasswordMatched) {
    // res.send({
    //   // message: "Login successful",
    //   token,
    // });
    const payload = { username: username };
      const jwtToken = jwt.sign(payload, "qwertyuiop");

      // 🔹 5. Send token as response
      response.json({ jwtToken });
    } else {
      response.status(401).json({"Error":"Invalid Password"});
    }
  } catch (error) {
    console.error("Error:", error);
    response.status(500).json("Internal Server Error");
  } finally {
    if (connection) {
      try {
        await connection.close();
      } catch (err) {
        console.error(err);
      }
    }
  }
});


// API route to signup

app.post("/users", async (req, res) => {
  const { username, name, password, gender, location } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    // Get connection
    const connection = await oracledb.getConnection(dbConfig);

    // SQL Insert Query
    const sql = `
      INSERT INTO users (username, name, password, gender, location)
      VALUES (:username, :name, :password, :gender, :location)
    `;

    // Execute query with parameter binding
    await connection.execute(sql, {
      username,
      name,
      password:hashedPassword,
      gender,
      location
    }, { autoCommit: true }); // auto commit after insert

    
    res.status(201).json("*SignUp Successfully done*");

    // Close connection
    await connection.close();
  } catch (err) {
    console.error(err);
    res.status(500).json("User Already Exists");
  }
});

// 🟢 Start the server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
