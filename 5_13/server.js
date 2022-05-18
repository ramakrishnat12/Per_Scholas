const express = require("express");
const app = express();


// /////////////////Greetings////////////////////
app.get('/greeting', (req,res)=> {
    res.send('<h1>Wow! Hello there, jimmy-boy</h1>');
});

app.get('/greeting/jimmy-boy/:firstName', function(req, res) {
    console.log(req.params);
    // console.log(req.query);
    res.send('Wow! Hello there'+' ' + req.params.firstName);
  });



// //////////////////////////////////////////////////////

// ////////////Tip Calculator///////////////////



app.get('/tip/:total/:tipPercentage',(req, res)=>{
    console.log(req.parms);
    let total = Number(req.params.total);
    let tipPercentage = Number(req.params.tipPercentage);
    let tip = total * tipPercentage/100;
    tip = String(tip);
    res.send(tip);
});

// ///////////////Magic 8 Ball

// ////////////////

app.listen(3000, () => {
    console.log("Listening on Port3k!");
});


// --------------------------------------
// const express = require('express');
// const greeting = require('./name')
// const app = express();

// const PORT = 5000;



// app.get('/greeting', (req, res)=>{
//     console.log("Hello, stranger");
//     console.log(greeting);
//     // res.send(greeting);
//     res.send("Hello, stranger");
// })

// //add show route
// app.get('/greeting/:name', (req, res)=>{
//     console.log(req.params.name);
//     res.send("Hello,"+req.params.name);
// });


// app.listen(PORT);
// -----------------------------------
// greeting = [
//     {name: "Ramakrishna"},
//     {name: "Eric"},
//     {name: "Alex"},
//     {name: "Anna"},
//     {name: "Praveena"}
// ]

// module.exports = greeting

// -------------------------------------
// -------------------------------------



