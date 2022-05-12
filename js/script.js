let Shot = document.querySelector('.shot'),
    Hit = document.querySelector('.hit'),
    Target = document.querySelectorAll('.target'),
    TargetVertical = document.querySelectorAll('.target__vertical'),
    Targets = document.querySelector('.targets'),
    Start = document.querySelector('.start'),
    StartModal = document.querySelector('.start_modal'),
    Tir = document.querySelector('.tir'),
    Passed =document.querySelector('.passed'),
    Count =  document.querySelector('.count strong'),
    Level =  document.querySelector('.level strong'),
    Show = document.querySelector('.show'),
    Hide = document.querySelector('.hide'),
    Counter = 0,
    CountLevel = 1,
    CountWin = 0;

    let x = 5;//targets for lvl

Tir.addEventListener('click', PlayShot);
Passed.addEventListener('click', GoNext);
Start.addEventListener('click', GoStart);

function GoStart(){
    StartModal.style.display = 'none';
    Level.textContent = ' '+CountLevel;
}


function PlayShot(event) {
    let tg = event.target;
    if(tg.classList.contains('target')){
        Hit.stop();
        Hit.play(); 
        Counter++;
        Count.textContent = " "+Counter;
        tg.classList.add('die');
        if(CountWin == 0){
            Lvl1();
        }
        if(CountWin == 1){
            setTimeout(replay,3000);
            WhenWin(x);

        }
        if(CountWin == 2){
            setTimeout(replay,2000);
            WhenWin(x);
        }
        if(CountWin == 3){
            setTimeout(replay,1000);
            WhenWin(x);
        }
        if(CountWin == 4){
            setTimeout(replay,1000);
            WhenWin(x);
        }
        if(CountWin == 5){
            setTimeout(replay,6000);
            WhenWin(x);
        }
    }
    else{
        Shot.stop();
        Shot.play();
    }  
}

function Lvl1() {
    if (Counter == 5) {
        setTimeout(replay,400);
    }
    WhenWin(x);
}

function Win() {
    Passed.style.display = ('flex'); 
    Target.forEach((item)=>{item.classList.add('hide');});
    TargetVertical.forEach((item)=>{item.style.display=('none');});
}

function WhenWin(n) {
    if (Counter == n) {
        Win();        
    } 
}

function GoNext(){
    Passed.style.display = ('none');
    CountWin++;
    CountLevel++;
    Counter = 0;
    Level.textContent = ' '+CountLevel;
    Count.textContent = ' '+Counter;
    console.log('Level = '+CountLevel);
    console.log('Win = '+CountWin);
    Target.forEach(function(item){
        item.classList.remove('die');
       });
    if(CountWin == 1){
        CreateMoveHlvl(5)
    };
    if(CountWin == 2){
        CreateMoveHlvl(4)
    };
    if(CountWin == 3){
        CreateMoveHlvl(3)
    };
    if(CountWin == 4){
        CreateMoveHlvl(2)
    };
    if(CountWin == 5){
        CreateMoveVlvl();
    };
 



}

function CreateMoveHlvl(n) {
    Target[0].classList.remove('hide');
    Target[0].classList.add('move2lvl');
    Target[0].style.animationDuration = `${Math.round(Math.random()*n)+0.5}s`;
    Targets.style.justifyContent = ('start');    
}

function CreateMoveVlvl() {
    TargetVertical.forEach(element => {
        element.style.display = ('block');
    });
}





function replay() {
    Target.forEach(function(item){
     item.classList.remove('die');
    });
    
}
   
 





HTMLAudioElement.prototype.stop = function(){
    this.pause();
    this.currentTime = 0.0;
   }

