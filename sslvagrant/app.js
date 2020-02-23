// Default is async
const fs = require('fs')
fs.readFile('myFile.txt', 'utf-8', (err, data) => {
    if (err) throw err;
    console.log(data)
});
var name = "orcun";
console.log(name);

// Let's make it sync
async function returnTrue() {
    var name = "orcun";
    let promise = new Promise((resolve, reject) => {
        fs.readFile('myFile.txt', 'utf-8', (err, data) => {
            if (err) throw err;
            resolve(data)
        });
    });
    let result = await promise;
    console.log(result)
    console.log(name);
}
returnTrue();