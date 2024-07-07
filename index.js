
const express = require('express');
const app = express();
const port = 3000;

///DUMB WAY OF DOING INPUT VALIDATION.

// app.get('/health-checkup',function(req,res) {
//     const username = req.headers.username;
//     const password = req.headers.password;
//     const kidneyId = req.query.kidneyId;
//     if(username != "harkirat" || password != "pass"){
//         res.status(400).json({
//             "msg" : "there is something wrong with your code."
            
//         })
//     }
//     if (kidneyId != 1 && kidneyId != 2){
//         res.status(400).json({
//             "msg" : "there is something wrong with your code."
//         })
//     }
//     res.json({
//         "msg":"Everything is fine with your kidney."
//     })
// });


// app.listen(port, () => {
//     console.log(`Server running at http://localhost:${port}/`);
// });

//USING MIDDLEWARES FOR CHECKS AND AUTHENTICATIONS.

function userCheckMW (req,res,next){
    const username = req.headers.username;
    const password = req.headers.password;
    const kidneyId = req.query.kidneyId;
    if(username != "harkirat" || password != "pass"){
        res.status(400).json({
            msg:"There was wrong a input."
        });
    } else{
        next();
    }
};
function kidneyCheckMW (req,res,next){
    const username = req.headers.username;
    const password = req.headers.password;
    const kidneyId = req.query.kidneyId;
    if(kidneyId != 1 && kidneyId != 2){
        res.status(400).json({
            msg:"There was wrong Kidney Inputs."
        });
    } else{
        next();
    }
};


app.get('/health-check',userCheckMW,kidneyCheckMW,(req,res)=>{
    res.send("Your kidney is healthy")
})

app.listen(port, () => {
        console.log(`Server running at http://localhost:${port}/`);
    });