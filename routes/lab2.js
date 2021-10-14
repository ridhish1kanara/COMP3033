const express = require('express');
const router = express.Router();


router.get('/', (req, res, next) => {
//created a temporary variable A
    var A = req.query.x;

//created a temporary variable B
    var B = req.query.y;

//converting string variable A to int x    
    var x = parseInt(A, 10);

//converting string variable B to int y
    var y = parseInt(B, 10);

//creating a method 
    var method = req.query.method;
    var gross;


  
     //if statement for Divide
    if(req.query.method == 'divide'){
        gross = x/y;
    }

      //if statement for addition
      else if(req.query.method == 'add'){
        gross = x+y;
    }
   

     //if statement for Multiply
     else if(req.query.method == 'multiply'){
        gross = x*y;
    }

    //if statement for Substract
    else if(req.query.method == 'subtract'){
        gross = x-y;
    }
    
    //if there is a mistake this else will throw an message
   else{
       res.json("ERROR CAUGHT")
   }



//Json output
    res.json({
        "x" : x, 
        "y" : y,
        "operation" : method,
        "result" : gross
    });
});

module.exports = router;