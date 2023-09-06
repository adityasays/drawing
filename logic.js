const canvas=document.getElementById("canvas")
const body=document.querySelector("body")
canvas.height=window.innerHeight;
canvas.width=window.innerWidth;
var color=''
var lwidth=5;
let prevx=null
let prevy=null
let draw=false 
body.style.backgroundColor="#FFFFFF"
var inputt=document.getElementById("pickcol")
inputt.addEventListener("input",function(){
    color=inputt.value 
    body.style.backgroundColor=color;
},false);
const ctx=canvas.getContext("2d");
ctx.lineWidth=lwidth
document.getElementById("colinputid").oninput=function(){
    draw=null;
    lwidth=document.getElementById("colinputid").value;
    document.getElementById("coloutputid").innerhtml=lwidth;
    ctx.lwidth=lwidth;

}
let crl=document.querySelectorAll(.col)
clr=Array.from(clr);
clr.forEach(clr=>{
    clr.addEventListener("click",()=>{
        ctx.strokeStyle =clr.dataset.clr;

    })
}) 
let clrbutton=document.querySelector(".clear")
clrbutton