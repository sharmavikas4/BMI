const express = require("express");
const bodyParser = require("body-parser");
const app  = express();
app.use(bodyParser.urlencoded({extended: true}));
app.get("/bmicalculator",function(req,res){
  res.sendFile(__dirname+"/bmiCalculator.html");
});
app.post("/bmicalculator",function(req,res){
  var weight = Number(req.body.weight);
  var height = Number(req.body.height);
  var bmi = Math.round(weight/(height*height));
  if (bmi<18.5)
  {
    res.send("The bmi is "+ bmi + " and the person is underweight");
  }
  else if (bmi>=18.5 && bmi<=24.9)
  {
    res.send("The bmi is "+ bmi + " and the person has normal weight");
  }
  else if (bmi>=25 && bmi <= 29.9)
  {
    res.send("The bmi is "+ bmi + " and the person is overweight");
  }
  else if (bmi>=30)
  {
    res.send("The bmi is "+ bmi + " and the person has obesity");
  }
});
app.listen(3000,function(){
  console.log("The server started at the port 3000")
})
