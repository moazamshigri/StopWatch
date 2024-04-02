let timerDisplay = document.querySelector(".timerDisplay");
let stopButton = document.querySelector('#stop');
let startButton = document.querySelector('#start');
let resetButton = document.querySelector('#reset');

let mSec = 0;
let sec  = 0;
let min  = 0;

let timerId = null;

let startTimer = () => {
 
        
        mSec++;
        if(mSec==10){
          mSec=0;
          sec++;
        }
        if(sec==60){
          sec++;
          sec =0
          min++;
        }
        let mSecString = mSec<10?`0${mSec}`:mSec;
        let secString = sec<10?`0${sec}`:sec;
        let minString = min<10?`0${min}`:min;
        timerDisplay.innerHTML = `${minString} : ${secString} : ${mSecString}`

  }

  startButton.addEventListener('click',() => {
    if(timerId!=null){
        clearInterval(timerId);// it stops the set interval function
    }
    timerId = setInterval(startTimer,100);
  }
  )
  stopButton.addEventListener('click',() => {
   
        clearInterval(timerId);
    
    
  });
  resetButton.addEventListener('click',() => {
   
        clearInterval(timerId);
        timerDisplay.innerHTML = "00 : 00 : 00";
        mSec = 0;
        min=0;
        sec=0;
    
    
  });