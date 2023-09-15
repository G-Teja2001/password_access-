//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming


import bodyParser from 'body-parser';
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';


const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);


const app = express();
const port = 3000;
var userIsAuthorised = false;


app.use(bodyParser.urlencoded({ extended: false }));





function checking_password (req,res,next) {
    const password = req.body["password"];
    if (password === "ILoveProgramming") {
        userIsAuthorised = true;
  }
  next();
    
}

app.use(checking_password);

app.get('/', (req, res) => {
    
    res.sendFile('public/index.html' , { root : __dirname});
  });



app.post('/check',(req,res)=>{
    console.log('Request Body:', req.body);
    if (userIsAuthorised){
        res.sendFile('public/secret.html' , { root : __dirname});
    } 
    else{
        res.sendFile('public/index.html' , { root : __dirname});
    }

});


app.listen(port, () =>
  console.log('Example app listening on port 3000!'),
);