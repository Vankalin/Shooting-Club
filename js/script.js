let Shot = document.querySelector('.shot'),
    Hit = document.querySelector('.hit'),
    Target = document.querySelectorAll('.target'),
    MoveTargetHorisontal = document.querySelector('.move2lvl'),

    TargetVertical = document.querySelectorAll('.target__vertical'),
    Targets = document.querySelector('.targets'),
    
    Start = document.querySelector('.start'),
    StartModal = document.querySelector('.start_modal'),
    
    SettingsBtn = document.querySelector('.settings-btn'),
    PauseBtn = document.querySelector('.pause-btn'),
    
    SettingsModal = document.querySelector('.settings-modal'),
    PauseModal = document.querySelector('.pause-modal'),
    
    SettingsProperties = document.querySelector('.settings-modal__properties'),
    GameComplexity = document.querySelector('#game-complexity'),
    TextComplexity = document.querySelector('.settings-modal__complexity_text'),
    
    Tir = document.querySelector('.tir'),
    Passed =document.querySelector('.passed'),
    Count =  document.querySelector('.count strong'),
    Level =  document.querySelector('.level strong'),
    Show = document.querySelector('.show'),
    Hide = document.querySelector('.hide'),
    
    CurrentComplexity = 0,
    Counter = 0,
    CountLevel = 1,
    CountWin = 0;

    let x = 5;//targets for lvl 

Tir.addEventListener('click', PlayShot);
Passed.addEventListener('click', GoNext);
Start.addEventListener('click', GoStart);
PauseBtn.addEventListener('click', OpenPauseModal);
PauseModal.addEventListener('click', ClosePauseModal);
SettingsBtn.addEventListener('click', OpenSettingsModal);
SettingsModal.addEventListener('click', CloseSettingsModal)
GameComplexity.addEventListener('change', ChangeComplexity)

function OpenPauseModal() {
    Target.forEach(e => {e.classList.add('stop')});
    PauseModal.classList.remove('hide')
}
function ClosePauseModal() {
    Target.forEach(e => {e.classList.remove('stop')});
    PauseModal.classList.add('hide')
}

function OpenSettingsModal(){
    SettingsModal.classList.remove('hide');
    console.log('451')
    
}
function CloseSettingsModal(e){
    e.target===SettingsModal?SettingsModal.classList.add('hide'):SettingsModal.classList.remove('hide');
    
}
function HideSettingsBtn(){
    SettingsBtn.classList.add('hide');
}
function ShowSettingsBtn(){
    SettingsBtn.classList.remove('hide');
}
function HidePauseBtn(){
    PauseBtn.classList.add('hide');

}
function ShowPauseBtn(){
    PauseBtn.classList.remove('hide');
}



function ChangeComplexity(e){
    ComplexityList = ['Easy','Normal','Hard','Master','Impossible']
    CurrentComplexity = e.target.value
    TextComplexity.innerHTML=ComplexityList[CurrentComplexity]
    console.log(CurrentComplexity)
    switch (CountLevel) {
        case 2:
            CreateMoveHlvl(7.5-CurrentComplexity)
            break;
        case 3:
            CreateMoveHlvl(6.5-CurrentComplexity)
            break;
        case 4:
            CreateMoveHlvl(5.5-CurrentComplexity)
            break;
        case 5:
            CreateMoveHlvl(4.5-CurrentComplexity)
            break;
    
    
        default:
            break;
    }
   

}



function GoStart(){
    ShowPauseBtn();
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
    else if (tg!=GameComplexity){
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
    HideSettingsBtn();
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
    ShowSettingsBtn();
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
        CreateMoveHlvl(7.5-CurrentComplexity)
    };
    if(CountWin == 2){
        CreateMoveHlvl(6.5-CurrentComplexity)
    };
    if(CountWin == 3){
        CreateMoveHlvl(5.5-CurrentComplexity)
    };
    if(CountWin == 4){
        CreateMoveHlvl(4.5-CurrentComplexity)
    };
    if(CountWin == 5){
        CreateMoveVlvl();
    };
 



}

function CreateMoveHlvl(n) {
    Target[0].classList.remove('hide');
    Target[0].classList.add('move2lvl');
    Target[0].style.animationDuration = `${n}s`;
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

