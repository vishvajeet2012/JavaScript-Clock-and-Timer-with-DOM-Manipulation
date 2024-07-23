console.log("this is vishu")
var main_clock  ;
 let main_c ;
 let clicktime ; /// timer stop or on 
 let runtime; /// 60 second timer 
const inter= setInterval(function() {

let t = document.getElementById('year')
let minutes = document.getElementById('minutes')
let month= document.getElementById('month')
let day  = document.getElementById('date')
let hours = document.getElementById('hours')
let sec =document.getElementById('second')


const vishu = new Date();
const timee = vishu;

const y = timee.getFullYear()
const D = timee.getDate()
const mon = timee.getMonth()
const min = timee.getMinutes()
const hour = timee.getHours()
const secc = timee.getSeconds()

console.log(mon)
//t.innerText = y

    day.innerText= D + "/"
    month.innerText= mon + "/"
     t.innerText = y 
    hours.innerText =  hour+":"
    hours.style.color = "crimson"
     minutes.innerText = min+":"
    sec.innerText = secc




}, 1000); 
function timer_btn() {
    clearInterval(inter)

    console.log("onnn")

            var mybody = document.body       // bodyko target kiya hai
     main_clock = document.getElementsByClassName("main_container")[0]

       main_c=  document.createElement("div")
       let timerbox = document.createElement('div')
        let timerOn = document.createElement('div')
        let btnmain = document.createElement("div") // yha pr button banya hai 
      let btnstr = document.createElement('button')
    let btnstop = document.createElement('button') //yha pr button banya gya hai 
        main_c.className = 'main_timer_box'
        timerbox.className ='timerbox'
        timerOn.className = "timerOn"
        btnmain.className= "btnmain" 
        btnstr.className = "btnstr"
        btnstop.className= "btnstr"  
        btnstr.innerText = "Start"   // start timer butoon
        btnstop.innerText = "Rest"   // rest timer
        timerOn.innerText= "00"
        btnstr.onclick = "strtimr()"    // yha pr onClick use kiya start button pr 
        btnstop.onclick= "stoptimr()"
 
        mybody.appendChild(main_c)
        main_c.appendChild(timerbox)
        timerbox.appendChild(timerOn)
        timerbox.appendChild(btnmain)
        btnmain.appendChild(btnstr)
        btnmain.appendChild(btnstop)
        main_clock.style.display = "none"   //yha s elemnet remove kiya hai 
  btnstr.addEventListener('click', btntiml)
    function btntiml(){
     runtime = 60;

     clicktime = setInterval(function() {
                  
  runtime= runtime-1
   timerOn.innerText = runtime
   if(runtime == 0)
   {
 clearInterval(clicktime) 
         }       
},1000) }
 btnstop.addEventListener('click' , stoptem) 
        function stoptem(){
                clearInterval(clicktime)
                timerOn.innerText = "00"
                runtime==60;
        }
}
function clockbtnN() {
     main_clock.style.display= " block"
    main_c.remove()
  
 
    
}






