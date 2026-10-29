// create a promisified version of fs.writeFile
const fs = require("fs");

const fsWriteFilePromisefied = (filePath, encoding) => {
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, encoding, (err, data) => {
            let content = data;
            let contentInUpperCase = content.toUpperCase();
            fs.writeFile(filePath, contentInUpperCase, (err) => {
                if(err) {
                    reject();
                } else {
                    resolve();
                }
            } )
        })
    })
}

fsWriteFilePromisefied('a.txt', 'utf-8')
.then(() => {
    console.log("File have been updated");
})
.catch((e) => {
    console.log("Failed to update file");
})