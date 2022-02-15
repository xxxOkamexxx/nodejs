const  express = require('express');
const app = express();

//Ladda bodyParsers
app.use(express.json());
app.use(express.urlencoded({ extended: false}));

app.use('/', require('./routes/index'));

app.listen(3000, () => {
    console.log('server started att http://localhost:3000');
});