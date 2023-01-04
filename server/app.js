const apiroutes = require("../server/routes/api.routes");
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');


require('dotenv').config();
const port = process.env.PORT || 5000;
require('./config/db')



const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({
    extended: true
}));


app.use(express.json());

//routes
app.use('/api' , apiroutes);
app.listen(port, () => {
console.log(`Server is running at http://localhost:${port}/api/admin`);

});

