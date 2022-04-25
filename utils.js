// const { rejects } = require("assert");
// const { resolve } = require("path");

// function getReqData(req) {
//     return new Promise((resolve, reject) => {
//         try {
//             let body = '';

//             req.on('data', (chunk) => {
//                 body += chunk.toString();
//             });

//             req.on('end', () => {
//                 resolve(body);
//             });
//         } catch (error) {
//             reject(error)
//         }
//     })
// }

// module.exports = { getReqData }

//utils.js
function getReqData(req) {
    return new Promise((resolve, reject) => {
        try {
            let body = "";
            // listen to data sent by client
            req.on("data", (chunk) => {
                // append the string version to the body
                body += chunk.toString();
            });
            // listen till the end
            req.on("end", () => {
                // send back the data
                resolve(body);
            });
        } catch (error) {
            reject(error);
        }
    });
}
module.exports = { getReqData };