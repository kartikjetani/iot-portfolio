const express = require('express');
const app = express();
const path = require('path');
const methoOverride = require('method-override');
const mongoose = require('mongoose');
const idea = require('./Model/newIdea');
const cors = require("cors");
mongoose.connect('mongodb://localhost:27017/iot-portfolio', {useNewUrlParser: true, useUnifiedTopology: true})
.then(()=>{
	console.log("DataBase is Connected!!");
})
.catch(err => {
	console.log("Error Occured");
	console.log(err);
})

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.urlencoded( { extended: true } ));
app.use(express.json());
app.use(methoOverride('_method'))

app.use(cors({
	origin: ['http://localhost:3000', 'http://localhost:3001', 'http://localhost:5000', 'http://*.ngrok.io']
  }));


app.listen(5000, () => {
	console.log('On Port 5000!!!!!')
})