var http = require('http');
var index = require('./index');

var myName = function () {
    console.log("Here is my IP address");
}

async function callHttpbin() {
    let promise = new Promise((resolve, reject) => {
        http.get(
            'http://httpbin.org/ip',
            function (response) {
                var str = "";
                response.setEncoding('utf8');
                response.on('data', function (data) {
                    str += data;
                });
                response.on('end', function () {
                    var result = JSON.parse(str);
                    myips = result.origin;
                    resolve(myips)
                });
            }
        );
    });

    let result = await promise;
    return result;
}

async function executeAsyncTask() {
    const valueA = await callHttpbin()
    myName();
    console.log(valueA)
}

executeAsyncTask();
// Output Here is my IP address 149.24.160.1, 149.24.160.1
