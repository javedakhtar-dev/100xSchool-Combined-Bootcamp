// create a promisifed version of setTimeout

const setTimeoutPremisefied = (timer) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, timer);
    })
}

setTimeoutPremisefied(1000)
.then(() => {
    console.log("Hii after 1 sec");
})