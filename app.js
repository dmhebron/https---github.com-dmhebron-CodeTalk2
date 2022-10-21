const {readFile, writeFile} = require('fs');
console.log('start');
readFile('./content/first.txt','utf8', (err, result)=> {
   if (err) {
       console.log(err);
       return 
   }
   const first = result;
   console.log(result);
   readFile('./content/second.txt','utf8', (err, result)=> {
       if (err) {
           console.log(err);
           return 
       }
       const second = result;
       console.log(result);
       writeFile('./content/result-async.txt', `Here is the result : ${first}, ${second}`,(err, result) => {
           if (err) {
               console.log(err);
               return 
           }
           console.log('done with the task');
       }
       );
   })
});
 
console.log('starting next task');

/*
1. ran the code to see what it does
2. created two txt files but still got an error
3. created a folder called content and moved the txt files
4. ran the code again and got no errors

*/
/*
fs: file system





*/