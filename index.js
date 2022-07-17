const {User} = require('../codewithshreesh/models/users');
const {Customer} = require('../codewithshreesh/models/customers');
const mongoose = require('mongoose');
const express = require('express');
const path = require ('path');
const _ = require('lodash');
var bodyParser = require('body-parser');
const app = express();
app.use(express.json());
app.use(bodyParser.json({limit:'50mb',extended:true}));
app.use(bodyParser.urlencoded({limit:'50mb',extended:true})) ;
app.use(express.static('public'));


app.get('/',(req, res) => {
  var options={
      root:path.join(__dirname)
  };
  let fileName='index.html'
  res.sendFile(fileName,options, (err) => {
    if (err) {
        console.log ("Error in sending file"+fileName);
    } else {
        console.log ("sent file" + fileName);
    }
  });
});

app.post('/api/user',async (req, res) => {
    console.log ("name is:" + req.body.name);
    console.log ("email is:" + req.body.email);
    var options={
      root:path.join(__dirname)
    };
    let fileName='index.html'
    user = new User(_.pick(req.body, ['name', 'email']));
    await user.save();
    console.log("user Saved");
    res.redirect('/');
});

// CONTACT API

// app.get('/contact',(req, res) => {
//   var options={
//       root:path.join(__dirname)
//   };
//   let fileName='contact.html'
//   res.sendFile(fileName,options, (err) => {
//     if (err) {
//         console.log ("Error in sending file"+fileName);
//     } else {
//         console.log ("sent file" + fileName);
//     }
//   });
// });

// app.post('/api/customer',async (req, res) => {
//   console.log ("req body" + req.body.firstname);
//   console.log ("req body" + req.body.lastname);
//   console.log ("req body" + req.body.email);
//   console.log ("req body" + req.body.phonenumber);
//   console.log ("req body" + req.body.message);
//   var options={
//     root:path.join(__dirname)
//   };
//   let fileName='contact.html'
//   user = new User(_.pick(req.body, ['firstname', 'lastname', 'email', 'phonenumber', 'message']));
//   await user.save();
//   console.log("user Saved");
//   res.sendFile(fileName,options, (err) => {
//     if (err) {
//         console.log ("Error in sending file"+fileName);
//     } else {
//         console.log ("sent file" + fileName);
//     }
//   });
// });

// Contact API

app.post('/api/customer',async (req, res) => {
  console.log ("firstname is:" + req.body.firstname);
  console.log ("lastname is:" + req.body.lastname);
  console.log ("email is:" + req.body.email);
  console.log ("phonenumber is:" + req.body.phonenumber);
  console.log ("message is:" + req.body.message);
  var options={
    root:path.join(__dirname)
  };
  customer = new Customer(_.pick(req.body, ['firstname', 'lastname', 'email', 'phonenumber', 'message']));
  await customer.save();
  console.log("Customer Details Saved");
  res.redirect('/');
});

mongoose.connect('mongodb://localhost:27017/codewithshreesh')
  .then(() => console.log('Connected to MongoDB...'))
  .catch(err => console.error('Could not connect to MongoDB...',err));

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));