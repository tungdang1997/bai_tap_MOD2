// const onMybirthday = (isKayoSick) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (isKayoSick) {
//                 resolve(2)
//             } else {
//                 reject(new Error("i am sad"))
//             }
//         }, 2000);
//     });
// };
//
// onMybirthday(false)
//     .then((result) => {
//         console.log(`i have ${result} cakes`);
//     })
//     .catch((error) => {
//         console.log(error)
//     })
//     .finally(() => {
//         console.log('ok')
//     })
// onMybirthday(true)
//     .then((result) => {
//         console.log(`i have ${result} cakes`)
//     })
//     .catch((error) => {
//         console.log(error)
//     })
//     .finally(() => {
//         console.log('ok')
//     })


// function download(url, callback){
//     setTimeout(() => {
//         console.log(`Downloading ${url} ...`);
//         callback(url)
//     }, 1000);
// }
//
// function process(picture){
//     console.log(`Processing ${picture}`);
// }
//
// let url = 'https://www.javascripttutorial.net/pic.jpg'
// download(url,process);


function sleep(ms){
    return new Promise((resolve) => setTimeout(resolve, ms))
}

async function countDown(i){
    while (i > 0){
        document.getElementById('time-countdown').innerHTML = i;
        i--;
        await sleep(1000);
    }
    return "counter finished: ";

}

let counter = countDown(10);
counter.then((msg) =>{
    document.getElementById('time-countdown').innerHTML = msg
});