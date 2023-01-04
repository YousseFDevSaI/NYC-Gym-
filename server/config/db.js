const mongoose = require('mongoose');
const mongoDB_Url = process.env.MongoDB_Url;
const connection = mongoose.connection;
require('dotenv').config();

mongoose.set('strictQuery', false);
mongoose.connect(mongoDB_Url,{useNewUrlParser: true , useUnifiedTopology:true});
connection.once('open', () => {
    console.log("MongoDB database connection established succesfully");
    
});
