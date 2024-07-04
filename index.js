/**
 You need to create an express HTTP server in Node.js which will handle the logic of a file server.
- Use built in Node.js `fs` module
The expected API endpoints are defined below,
1. GET /files - Returns a list of files present in `./files/` directory
Response: 200 OK with an array of file names in JSON format.
Example: GET http://localhost:3000/files
2. GET /file/:filename - Returns content of given file by name
    Description: Use the filename from the request path parameter to read the file from `./files/` directory
    Response: 200 OK with the file content as the response body if found, or 404 Not Found if not found. Should return `File not found` as text if file is not found
    Example: GET http://localhost:3000/file/example.txt
- For any other route not defined in the server return 404
Testing the server - run `npm run test-fileServer` command in terminal
*/
const express = require('express');
const app = express();
const port = 3000;

// app.get('/health-checkup',(req,res)=>{
//     const username = req.headers.username;
//     const password = req.headers.password;
//     const kidneyId = req.query.kidneyId;
//     if(!(username === "harkirat" || password === "pass")){
//         if(!(kidneyId === 1 || kidneyId === 2)){
//             //do something that is expected.
//             res.status(400).json({
//             "msg" : "hello your kideny is not working fine."
            
//         })  
//         } return 
       
//     }
//     res.json({
//         "msg" : "Your kidney/kidneys are fine."
//     })

// })
   
app.get('/health-checkup',function(req,res) {
    const username = req.headers.username;
    const password = req.headers.password;
    const kidneyId = req.query.kidneyId;
    if(username != "harkirat" || password != "pass"){
        res.status(400).json({
            "msg" : "there is something wrong with your code."
            
        })
    }
    if (kidneyId != 1 && kidneyId != 2){
        res.status(400).json({
            "msg" : "there is something wrong with your code."
        })
    }
    res.json({
        "msg":"Everything is fine with your kidney."
    })
});


app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});