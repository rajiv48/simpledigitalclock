const timer = document.querySelector('.timer');
console.log(timer);



function getTime() {
    const now = new Date();
    
    let h = now.getHours();
    let m = now.getMinutes();
    let s = now.getSeconds();
    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;
    const str = h + ":" + m + ":" + s;
    
    timer.textContent = str;
}
getTime();
setInterval(getTime,1000)
