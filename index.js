//Abdullah Hilal Siddiqi--
//This file serves as the starting point of our server.
//nodemon dependency added for internal testing

import express from  'express';
import bodyParser from 'body-parser';

import usersRoutes from './routes/users.js';

const app = express();
//using capital letters because we dont have to change from local port
const PORT = 80;

app.use(bodyParser.json());

//set default path for all user files
app.use('/users', usersRoutes);


//forward slash denotes home page
app.get('/', (req,res) => {
    console.log('[TEST]-1-Homepage working');

    res.send('Welcome to the homepage.');
});

app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`));



