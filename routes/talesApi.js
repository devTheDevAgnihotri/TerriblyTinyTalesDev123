const express = require('express');
const bodyParser = require('body-parser');
var fs=require('fs');


 

const talesApi = express.Router();

talesApi.use(bodyParser.json());

talesApi.get('/talesApi/:id',(req,res,next) => {
    
    res.statusCode=200;
    res.setHeader('Content-Type','application/json');
    fs.readFile('data.txt', 'utf-8', function(err, data) { 

        if( !err ) 
         {
             var arr=data.split(' ');
             var map = arr.reduce(function(p, c) {
                p[c] = (p[c] || 0) + 1;
                // console.log(p);

                return p;
                
              }, {});
              
             
              
              var newArr = Object.keys(map).sort(function(a, b) {
                return map[b] - map[a];
              });

              var newVal=[];
                for(let i=0;i<req.params.id;i++){
                    newVal.push(map[newArr[i]]);
                }
                // console.log(newVal);
              
              
             var final =newArr.splice(0,req.params.id)  
              
              // console.log(final);
              
              let result = final.reduce((o,c,i) => {o[c] = o[c] ? o[c] + ", " + newVal[i]:newVal[i]; return o;}, {})
             

              return res.end(JSON.stringify(result));

             
             
             
         }
        else
            throw err; 
    });
    
})

module.exports = talesApi;