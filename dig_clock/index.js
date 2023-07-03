const h_el = document.getElementById("hours")
const m_el = document.getElementById("minutes")
const s_el = document.getElementById("seconds")
const ampm_el = document.getElementById("ampm")


function clock(){
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let ampm = "AM";

    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;

    if(h >= 12){
        h = h-12;
        ampm = "PM";
    }

    h_el.innerText = h;
    m_el.innerText = m;
    s_el.innerText =s;
    ampm_el.innerText = ampm;

    setTimeout(()=>{
    clock()
    }, 1000)
}

clock()