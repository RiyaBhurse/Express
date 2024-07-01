// //diff between require and import
// //require is a function that imports a module
// //import is a keyword that imports a module


// // const fs = require('fs');

// // const path = require('path');

// // // Update the file name here
// // const filePath = path.join(__dirname, 'file.txt');

// // fs.readFile(filePath, 'utf8', (err, data) => {
// //   if (err) {
// //     console.error(err);
// //     return;
// //   }
// //   console.log(data);
// // });

// //read
// const fs = require('fs');
// const data = fs.readFileSync('file.txt');
// console.log(""+data);

// //mpdify
// fs.writeFileSync('file.txt', 'Hello, Riya!', 'utf8', (err) => {
//     console.log("File written successfully");
// });

// //append
// fs.appendFileSync('file.txt', " Now class is going on", 'utf8', (err) => {
//     console.log("File written successfully");
// });

// //append on next line
// fs.appendFileSync('file.txt', "\n Now class is going on", 'utf8', (err) => {
//     console.log("File written successfully");
// });

// //make directory
// fs.mkdir('NewDir', (err) => {
//     if(err) {
//         console.log(err);
//     }
//     console.log("Directory created successfully");
// }); 

// //delete directory
// fs.rmdir('NewDir', (err) => {
//     if(err) {
//         console.log(err);
//     }
//     console.log("Directory deleted successfully");
// });

// // rename file
// fs.rename('file.txt', 'newFile.txt', (err) => {
//     if(err) {
//         console.log(err);
//     }
//     console.log("File renamed successfully");
// });

// const p = '/Users/riya/node-pr/newFile.txt';
// const path = require("path"); 

// const dirname = path.dirname(p); 

// const extension = path.extname(p);
// console.log(dirname);
// console.log(extension);



                            // to do 
// //get the path of the folder
// const path = require('path');

// const folderPath = path.join(__dirname, 'dir');
// console.log('Path to myFolder:', folderPath);


// //get the path of the file


// //copy the file 
// const fs = require('fs');
// const path = require('path');
// const sour
// fs.copyFileSync('newFile.txt', 'newFile2.txt');

// // move the file to another folder

// const http = require('http');
// const server = http.createServer((req, res) => {
//     res.setHeader('Content-Type', 'text/html');
//     res.write('<html> <head><title> node js class </title></head> </html>');
//     if(req.url === '/login') {
//         res.write('<h1>Hello Login</h1>');
//     }
//     else res.write('<h1>Hello World</h1>');
//     res.write('</body></html>');
//     res.end();
// });
// const port = 3000;
// const host = 'localhost';

// server.listen(port, host, () => {
//     // console.log(`Server is running on http://${host}:${port}`);
// });

const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
  // Set the Content-Type to text/html
  res.setHeader('Content-Type', 'text/html');

  // Determine the file to serve based on the URL
    let filePath = path.join(__dirname, 'index.html');
 
  // Read the file and serve it as the response
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      res.writeHead(500);
      res.end('Error reading file');
      return;
    }
    res.writeHead(200);
    res.write(data);
    res.end();
  });
});

const port = 3000;
const host = 'localhost';

server.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`);
});
