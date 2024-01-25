
'use strict';
document.getElementById('generateAdvice').addEventListener('click', myFunction)




const uRl='https://api.adviceslip.com/advice'

async function myFunction(){
  const response=await fetch(uRl);
  // console.log(response);
const data= await response.json();
// console.log(data);
document.getElementById('advice').innerText = data.slip.advice
}

myFunction();

