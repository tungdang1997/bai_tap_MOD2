
function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms))
}

async function countDown() {
    let a = document.getElementById('time').value
    while (a > 0) {
        document.getElementById('time-countdown').innerHTML = a;
        a--;
        await sleep(100);
    }
    document.getElementById('time-countdown').innerHTML = "counter finished";


}
