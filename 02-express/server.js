/**
 * express
 */

const express = require('express');
const { sep } = require('path/posix');
const app = express();


// Respond to GET request for `/`
app.get('/',(req, res) => {
    // req = information om den inkommande förfrågan
	// res = metoder för att skicka ett svar på förfrågan
    console.log(req.method, req.url);

    res.send('Hello fron root😵😵‍💫🤯!');
});




// Start listening for incoming requests on port 3000
app.listen(3000, () => {
    console.log(`server started at http://localhost:3000`);
});
