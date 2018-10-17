const fs = require('fs');

const onFileUpload = (err, file) => console.log("Got the file")

console.log("Getting the file")

fs.readFile('readFileAsync.js', onFileUpload)

console.log("App Continues...")

