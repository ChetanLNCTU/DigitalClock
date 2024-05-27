
// var second=0;
// var minutes=0;
// var hour=0;
// var g=new Date();

// setInterval(
//    function(){
//     d=new Date();
//     second=d.getSeconds()*6;
//     minutes=d.getMinutes()*6;
//     hour=d.getHours()*30+Math.round(minutes/12);
//     document.getElementById("second_kanta").style.transform="rotate("+second+"deg)";
//     document.getElementById("minutes_kanta").style.transform="rotate("+minutes+"deg)";
//     document.getElementById("hour_kanta").style.transform="rotate("+hour+"deg)";

//    },1000
// )
document.getElementById("header").style.backgroundColor="rgba(33,37,41)";
document.getElementById("heading_style").style.color="white";
// console.log(b);
const d = new Date();
let text = d.toLocaleTimeString();
document.getElementById("real_clock").innerHTML=text;
const days = ["Sun", "Mon", "Tues", "Wed", "Thur", "Fri", "Sat"];

const c = new Date("2021-03-25");
let day = days[c.getDay()];
document.getElementById("Days").innerHTML=day;
 const f=new Date();
 let month=f.getMonth();
 document.getElementById("Months").innerHTML=month;
//  const y=new Date();
//  let year=y.getFullYear("2024");
//  let year=y.getYear();
const y = new Date();
let year = y.getFullYear();
document.getElementById("Years").innerHTML = year;
//  document.getElementById("Years").innerHTML=ye;
