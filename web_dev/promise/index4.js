// 
const fs = require("fs");

const fsReadAndWriteFilePromisefied = (filePath) => {
    return new Promise ((resolve, reject) => {
        fs.readFile(filePath, 'utf-8', (err, data) => {
            let content = data.toUpperCase().trim();
            fs.writeFile(filePath, content, (err)  => {
                if(err) {
                    reject();
                } else {
                    resolve();
                }
            })
        })
    })
}

// const udpateMultipleFileAtOnce = (prefix) => {
//     return new Promise((resolve, reject) => {
//         fsReadAndWriteFilePromisefied(prefix + "1.txt")
//         .then(() => {
//             fsReadAndWriteFilePromisefied(prefix + "2.txt")
//             .then(() => {
//                 fsReadAndWriteFilePromisefied(prefix + "3.txt")
//                 .then(() => {
//                     resolve()
//                 })
//             })
//         })
//     })
// }

// More clear code using async await syntax

const udpateMultipleFileAtOnce = async (prefix) => {
    await fsReadAndWriteFilePromisefied(prefix + "1.txt")
    await fsReadAndWriteFilePromisefied(prefix + "2.txt")
    await fsReadAndWriteFilePromisefied(prefix + "3.txt")
}

udpateMultipleFileAtOnce('a')
.then(() => {
    console.log("File has been read and updated");
})
.catch(() => {
    console.log("Faile to read file and update");
})