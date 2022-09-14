// pour les points d'experience Guerrier //

const minusBtnExp = document.querySelector('#minusExpGue');
const plusBtnExp = document.querySelector('#plusExpGue');
var numberExp = document.querySelector('#numberExpGue');
var visuExp = document.querySelector('.progress-barG');
var visuNivG = document.querySelector('#nivG');

lvl = 1;
number = 0;
min = 0;
max = 9;

minusBtnExp.addEventListener("click", minus);
plusBtnExp.addEventListener("click", plus);

function minus() {
    if (number > min){
        number = number -1;
        numberExp.innerText = number; 
        visuExp.style.transform = `scaleX(${number * 0.1})`; 
    } else {
        number = 9;
        lvl = lvl - 1;
        visuNivG.innerText = lvl;
        numberExp.innerText = number;
        visuExp.style.transform = `scaleX(${number * 0.1})`;
    }
}

function plus() {
    if(number < max){
        number = number +1;
        numberExp.innerText = number ;
        visuExp.style.transform = `scaleX(${number * 0.1})`;
    } else {
        number = 0;
        lvl = lvl + 1;
        visuNivG.innerText = lvl;
        numberExp.innerText = number; 
        visuExp.style.transform = `scaleX(${number * 0.1})`;
    }
}

minus()
plus()

// pour les points de force Guerrier //

const minusBtnForG = document.querySelector('#minusForGue');
const plusBtnForG = document.querySelector('#plusForGue');
var numberForG = document.querySelector('#numberForGue');

numberFG = -1;
minFG = 0;
maxFG = 9;

minusBtnForG.addEventListener("click", minusForG);
plusBtnForG.addEventListener("click", plusForG);

function minusForG() {
    if (numberFG > minFG){
        numberFG = numberFG-1;
        numberForG.innerText = numberFG;     
    } 
}

function plusForG() {
    if(numberFG < maxFG){
        numberFG = numberFG+1;
        numberForG.innerText = numberFG;
    }  
}

minusForG()
plusForG()

// pour les points d'attaque Guerrier //

const minusBtnAtt = document.querySelector('#minusAttGue');
const plusBtnAtt = document.querySelector('#plusAttGue');
var numberAtt = document.querySelector('#numberAttGue');

numberA = -1;
minA = 0;
maxA = 9;

minusBtnAtt.addEventListener("click", minusAtt);
plusBtnAtt.addEventListener("click", plusAtt);

function minusAtt() {
    if (numberA > minA){
        numberA = numberA-1;
        numberAtt.innerText = numberA;     
    } 
}

function plusAtt() {
    if(numberA < maxA){
        numberA = numberA+1;
        numberAtt.innerText = numberA;
    }  
}

minusAtt()
plusAtt()

// pour les points de defence Guerrier //

const minusBtnDef = document.querySelector('#minusDefGue');
const plusBtnDef = document.querySelector('#plusDefGue');
var numberDef = document.querySelector('#numberDefGue');

numberD = -1;
minD = 0;
maxD = 9;

minusBtnDef.addEventListener("click", minusDef);
plusBtnDef.addEventListener("click", plusDef);

function minusDef() {
    if (numberD > minD){
        numberD = numberD -1;
        numberDef.innerText = numberD;     
    } 
}

function plusDef() {
    if(numberD < maxD){
        numberD = numberD +1;
        numberDef.innerText = numberD;
    }  
}

minusDef()
plusDef()

// pour les points d'experience Mage//

const minusBtnExpM = document.querySelector('#minusExpMag');
const plusBtnExpM = document.querySelector('#plusExpMag');
var numberExpM = document.querySelector('#numberExpMag');
var visuExpM = document.querySelector('.progress-barM');
var visuNivM = document.querySelector('#nivM');

lvlM = 1;
numberM = 0;
minM = 0;
maxM = 9;

minusBtnExpM.addEventListener("click", minusM);
plusBtnExpM.addEventListener("click", plusM);

function minusM() {
    if (numberM > minM){
        numberM = numberM -1;
        numberExpM.innerText = numberM; 
        visuExpM.style.transform = `scaleX(${numberM * 0.1})`; 
    } else {
        numberM = 9;
        lvlM = lvlM - 1;
        visuNivM.innerText = lvlM;
        numberExpM.innerText = numberM;
        visuExpM.style.transform = `scaleX(${numberM * 0.1})`;
    }
}

function plusM() {
    if(numberM < maxM){
        numberM = numberM +1;
        numberExpM.innerText = numberM ;
        visuExpM.style.transform = `scaleX(${numberM * 0.1})`;
    } else {
        numberM = 0;
        lvlM = lvlM + 1;
        visuNivM.innerText = lvlM;
        numberExpM.innerText = numberM; 
        visuExpM.style.transform = `scaleX(${numberM * 0.1})`;
    }
}

minusM()
plusM()

// pour les points de force Mage //

const minusBtnForM = document.querySelector('#minusForMag');
const plusBtnForM = document.querySelector('#plusForMag');
var numberForM = document.querySelector('#numberForMag');

numberFM = -1;
minFM = 0;
maxFM = 9;

minusBtnForM.addEventListener("click", minusForM);
plusBtnForM.addEventListener("click", plusForM);

function minusForM() {
    if (numberFM > minFM){
        numberFM = numberFM-1;
        numberForM.innerText = numberFM;     
    } 
}

function plusForM() {
    if(numberFM < maxFM){
        numberFM = numberFM+1;
        numberForM.innerText = numberFM;
    }  
}

minusForM()
plusForM()

// pour les points d'attaque Mage //

const minusBtnAttM = document.querySelector('#minusAttMag');
const plusBtnAttM = document.querySelector('#plusAttMag');
var numberAttM = document.querySelector('#numberAttMag');

numberAM = -1;
minAM = 0;
maxAM = 9;

minusBtnAttM.addEventListener("click", minusAttM);
plusBtnAttM.addEventListener("click", plusAttM);

function minusAttM() {
    if (numberAM > minAM){
        numberAM = numberAM-1;
        numberAttM.innerText = numberAM;     
    } 
}

function plusAttM() {
    if(numberAM < maxAM){
        numberAM = numberAM+1;
        numberAttM.innerText = numberAM;
    }  
}

minusAttM()
plusAttM()

// pour les points de defence Mage //

const minusBtnDefM = document.querySelector('#minusDefMag');
const plusBtnDefM = document.querySelector('#plusDefMag');
var numberDefM = document.querySelector('#numberDefMag');

numberDM = -1;
minDM = 0;
maxDM = 9;

minusBtnDefM.addEventListener("click", minusDefM);
plusBtnDefM.addEventListener("click", plusDefM);

function minusDefM() {
    if (numberDM > minDM){
        numberDM = numberDM -1;
        numberDefM.innerText = numberDM;     
    } 
}

function plusDefM() {
    if(numberDM < maxDM){
        numberDM = numberDM +1;
        numberDefM.innerText = numberDM;
    }  
}

minusDefM()
plusDefM()

// pour les points d'experience Archer//

const minusBtnExpA = document.querySelector('#minusExpArc');
const plusBtnExpA = document.querySelector('#plusExpArc');
var numberExpA = document.querySelector('#numberExpArc');
var visuExpA = document.querySelector('.progress-barA');
var visuNivA = document.querySelector('#nivA');

lvlA = 1;
numberA = 0;
minA = 0;
maxA = 9;

minusBtnExpA.addEventListener("click", minusA);
plusBtnExpA.addEventListener("click", plusA);

function minusA() {
    if (numberA > minA){
        numberA = numberA -1;
        numberExpA.innerText = numberA; 
        visuExpA.style.transform = `scaleX(${numberA * 0.1})`; 
    } else {
        numberA = 9;
        lvlA = lvlA - 1;
        visuNivA.innerText = lvlA;
        numberExpA.innerText = numberA;
        visuExpA.style.transform = `scaleX(${numberA * 0.1})`;
    }
}

function plusA() {
    if(numberA < maxA){
        numberA = numberA +1;
        numberExpA.innerText = numberA ;
        visuExpA.style.transform = `scaleX(${numberA * 0.1})`;
    } else {
        numberA = 0;
        lvlA = lvlA + 1;
        visuNivA.innerText = lvlA;
        numberExpA.innerText = numberA; 
        visuExpA.style.transform = `scaleX(${numberA * 0.1})`;
    }
}

minusA()
plusA()

// pour les points de force Archer //

const minusBtnForA = document.querySelector('#minusForArc');
const plusBtnForA = document.querySelector('#plusForArc');
var numberForA = document.querySelector('#numberForArc');

numberFA = -1;
minFA = 0;
maxFA = 9;

minusBtnForA.addEventListener("click", minusForA);
plusBtnForA.addEventListener("click", plusForA);

function minusForA() {
    if (numberFA > minFA){
        numberFA = numberFA-1;
        numberForA.innerText = numberFA;     
    } 
}

function plusForA() {
    if(numberFA < maxFA){
        numberFA = numberFA+1;
        numberForA.innerText = numberFA;
    }  
}

minusForA()
plusForA()

// pour les points d'attaque Archer //

const minusBtnAttA = document.querySelector('#minusAttArc');
const plusBtnAttA = document.querySelector('#plusAttArc');
var numberAttA = document.querySelector('#numberAttArc');

numberAA = -1;
minAA = 0;
maxAA = 9;

minusBtnAttA.addEventListener("click", minusAttA);
plusBtnAttA.addEventListener("click", plusAttA);

function minusAttA() {
    if (numberAA > minAA){
        numberAA = numberAA-1;
        numberAttA.innerText = numberAA;     
    } 
}

function plusAttA() {
    if(numberAA < maxAA){
        numberAA = numberAA+1;
        numberAttA.innerText = numberAA;
    }  
}

minusAttA()
plusAttA()

// pour les points de defence Archer //

const minusBtnDefA = document.querySelector('#minusDefArc');
const plusBtnDefA = document.querySelector('#plusDefArc');
var numberDefA = document.querySelector('#numberDefArc');

numberDA = -1;
minDA = 0;
maxDA = 9;

minusBtnDefA.addEventListener("click", minusDefA);
plusBtnDefA.addEventListener("click", plusDefA);

function minusDefA() {
    if (numberDA > minDA){
        numberDA = numberDA -1;
        numberDefA.innerText = numberDA;     
    } 
}

function plusDefA() {
    if(numberDA < maxDA){
        numberDA = numberDA +1;
        numberDefA.innerText = numberDA;
    }  
}

minusDefA()
plusDefA()

// pour les points d'experience Druide //

const minusBtnExpD = document.querySelector('#minusExpDru');
const plusBtnExpD = document.querySelector('#plusExpDru');
var numberExpD = document.querySelector('#numberExpDru');
var visuExpD = document.querySelector('.progress-barD');
var visuNivD = document.querySelector('#nivD');

lvlD = 1;
numberD = 0;
minD = 0;
maxD = 9;

minusBtnExpD.addEventListener("click", minusD);
plusBtnExpD.addEventListener("click", plusD);

function minusD() {
    if (numberD > minD){
        numberD = numberD -1;
        numberExpD.innerText = numberD; 
        visuExpD.style.transform = `scaleX(${numberD * 0.1})`; 
    } else {
        numberD = 9;
        lvlD = lvlD - 1;
        visuNivD.innerText = lvlD;
        numberExpD.innerText = numberD;
        visuExpD.style.transform = `scaleX(${numberD * 0.1})`;
    }
}

function plusD() {
    if(numberD < maxD){
        numberD = numberD +1;
        numberExpD.innerText = numberD ;
        visuExpD.style.transform = `scaleX(${numberD * 0.1})`;
    } else {
        numberD = 0;
        lvlD = lvlD + 1;
        visuNivD.innerText = lvlD;
        numberExpD.innerText = numberD; 
        visuExpD.style.transform = `scaleX(${numberD * 0.1})`;
    }
}

minusD()
plusD()

// pour les points de force Druide //

const minusBtnForD = document.querySelector('#minusForDru');
const plusBtnForD = document.querySelector('#plusForDru');
var numberForD = document.querySelector('#numberForDru');

numberFD = -1;
minFD = 0;
maxFD = 9;

minusBtnForD.addEventListener("click", minusForD);
plusBtnForD.addEventListener("click", plusForD);

function minusForD() {
    if (numberFD > minFD){
        numberFD = numberFD-1;
        numberForD.innerText = numberFD;     
    } 
}

function plusForD() {
    if(numberFD < maxFD){
        numberFD = numberFD+1;
        numberForD.innerText = numberFD;
    }  
}

minusForD()
plusForD()

// pour les points d'attaque Druide //

const minusBtnAttD = document.querySelector('#minusAttDru');
const plusBtnAttD = document.querySelector('#plusAttDru');
var numberAttD = document.querySelector('#numberAttDru');

numberAD = -1;
minAD = 0;
maxAD = 9;

minusBtnAttD.addEventListener("click", minusAttD);
plusBtnAttD.addEventListener("click", plusAttD);

function minusAttD() {
    if (numberAD > minAD){
        numberAD = numberAD-1;
        numberAttD.innerText = numberAD;     
    } 
}

function plusAttD() {
    if(numberAD < maxAD){
        numberAD = numberAD+1;
        numberAttD.innerText = numberAD;
    }  
}

minusAttD()
plusAttD()

// pour les points de defence//

const minusBtnDefD = document.querySelector('#minusDefDru');
const plusBtnDefD = document.querySelector('#plusDefDru');
var numberDefD = document.querySelector('#numberDefDru');

numberDD = -1;
minDD = 0;
maxDD = 9;

minusBtnDefD.addEventListener("click", minusDefD);
plusBtnDefD.addEventListener("click", plusDefD);

function minusDefD() {
    if (numberDD > minDD){
        numberDD = numberDD -1;
        numberDefD.innerText = numberDD ;     
    } 
}

function plusDefD() {
    if(numberDD < maxDD){
        numberDD = numberDD +1;
        numberDefD.innerText = numberDD ;
    }  
}

minusDefD()
plusDefD()