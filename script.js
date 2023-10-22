let imgContainer = document.querySelector(".image");
let i = 0;
let setImage = "";
let t = 0;
let hr = document.querySelector(".hour");
let min = document.querySelector(".minute");
let sec = document.querySelector(".second");
let amPm=document.querySelector(".amPm")
let wish=document.querySelector(".time h1")

setInterval(() => {
  hr.innerText = new Date().getHours();
  min.innerText = new Date().getMinutes();
  sec.innerText = new Date().getSeconds();
  if (min.innerText.length > 1)
    document.querySelector(".zeroMin").style.display = "none";
  else document.querySelector(".zeroMin").style.display = "inline-block";

  if (sec.innerText.length > 1)
    document.querySelector(".zeroSec").style.display = "none";
  else document.querySelector(".zeroSec").style.display = "inline-block";

  if (hr.innerText.length > 1)
    document.querySelector(".zerohr").style.display = "none";
  else document.querySelector(".zerohr").style.display = "inline-block";

  if (hr.innerText>=5 && hr.innerText<12) {
    document.querySelector(".image").setAttribute("src", `https://d3nn873nee648n.cloudfront.net/1200x1800-new/100047/ZM1025005.jpg`);
    amPm.innerText="am";
    wish.innerText="Good Morning";
  }
    if (hr.innerText>=18 && hr.innerText<23) {
      document.querySelector(".image").setAttribute("src", "https://images.unsplash.com/photo-1659657317469-5774e5d98b99?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80");
      wish.innerText="Good Evening";
      amPm.innerText="pm"
    }
   
    console.log(hr.innerText);
  // document.querySelector(".image").setAttribute("src", `${setImage}`);
}, 1000);
