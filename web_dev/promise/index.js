// create a promisified version of fs.readFile

const fs = require("fs");

const fsReadFilePromisefied = (fileName, encoding) => {
    return new Promise((resolve, reject) => {
        fs.readFile(fileName, encoding, (err, data) => {
            if(err) {
                reject(err);
            } else {
                resolve(data);
            }
        })
    })
}

fsReadFilePromisefied('a.txt', 'utf-8')
.then(() => {
    console.log("File have been updated");
})
.catch((e) => {
    console.log("Failed while reading file");
})