




function sleep(millis) {
    let date = Date.now();
    let curDate = null;
    do {
        curDate = Date.now();
    } while (curDate - date < millis);
}