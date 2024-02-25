let sec=document.querySelector('#sec');
let min=document.querySelector('#min');
let hrs=document.querySelector('#hrs');




setInterval((e)=>{

    let date =new Date()

    let a=date.getSeconds()*6;
    let b=date.getMinutes()*6;
    let c=date.getHours()*30;
   
    sec.style.transform = `rotate(${a+180}deg)`;
    min.style.transform = `rotate(${b+180}deg)` ;
    hrs.style.transform = `rotate(${c+180}deg) `;



}, 1000);