const express = require('express'),
app = express(),
mongodb = require('mongodb'),
mongoose = require('mongoose'),
port = process.env.PORT || 3000,
myDB = 'mongodb://127.0.0.1:27017/advancedProject',
User = require('./Models/users.model.js'),
UserRoutes = require('./Controller/userRoutes.js'),
bodyParser = require('body-parser');

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
	extended:true
}));


app.use("/user", UserRoutes);

mongoose.connect(myDB,{useNewUrlParser: true});


app.listen(port, (error)=>{
if(!error){
	console.log('listening to port '+port);
}
else{
	console.log(err);
}
});