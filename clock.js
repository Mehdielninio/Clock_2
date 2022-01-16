// variables
function showTime(){
let date=new Date
let h= date.getHours()
let m=date.getMinutes()
let s=date.getSeconds()
let session="AM"


// conditions
if (h>=12){
    h= h-12
    session="PM" 
}
if(h===0){
    h=12
    
}

h=(h<10) ? `0${h}`: h
m=(m<10) ? `0${m}`: m
s=(s<10) ? `0${s}`: s


// display 
let time=`${h}:${m}:${s} ${session}`
document.querySelector(".clock").innerText=time
}

// interval
setInterval(showTime,1000)