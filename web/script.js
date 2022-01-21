var nbCoockies;
var btnBonus1;
var btnBonus2;
var btnBonus3;
var compteurDnt;
var listeBonus;


function initGame(){
    nbCoockies=0;
    btnBonus1 = document.getElementById('Buy1');
    btnBonus2 = document.getElementById('Buy2');
    btnBonus3 = document.getElementById('Buy3');
    compteurDnt = document.getElementById('profit');
    compteurDnt.innerText = nbCoockies + ' DNT';
    console.log(window.ethereum)
    // Connexion Via Web3 par MetaMask
if (typeof window.ethereum !== 'undefined') {
    console.log('MetaMask is installed!');
  }
}

function clickDonut(){
    nbCoockies= nbCoockies + 1;
    compteurDnt.innerText = nbCoockies + ' DNT';
    unlockBonus1();
    unlockBonus2();
    unlockBonus3();
}

function lockBonus1(){
    if (nbCoockies <= 15){
        btnBonus1.src="../assets/cadenas-ferme.png";
        btnBonus1.removeAttribute("onclick"); 
        btnBonus1.disabled = true;
    }
}

function unlockBonus1(){
    if (nbCoockies >= 15){
        btnBonus1.src="../assets/flat-g143731738_1280.png";
        btnBonus1.setAttribute("onclick","buyBonus1()");     
        btnBonus1.disabled = false;
    }
}

function lockBonus2(){
    if (nbCoockies <= 150){
        btnBonus2.src="../assets/cadenas-ferme.png";
        btnBonus2.removeAttribute("onclick"); 
        btnBonus2.disabled = true;
    }
}

function unlockBonus2(){
    if (nbCoockies >= 150){
        btnBonus2.src="../assets/homer.png";
        btnBonus2.setAttribute("onclick","buyBonus2()");            
        btnBonus2.disabled = false;
    }
}

function lockBonus3(){
    if (nbCoockies <= 1000){
        btnBonus3.src="../assets/cadenas-ferme.png";
        btnBonus3.removeAttribute("onclick"); 
        btnBonus3.disabled = true;
    }
}

function unlockBonus3(){
    if (nbCoockies >= 1000){
        btnBonus3.src="../assets/industry.png"; 
        btnBonus1.setAttribute("onclick","buyBonus3()");     
        btnBonus3.disabled = false;
    }
}

function bonus1(){
    //click toutes les secondes +0.001
    nbCoockies= nbCoockies + 1;
    compteurDnt.innerText = nbCoockies + ' DNT';
    unlockBonus1();
    unlockBonus2();
    unlockBonus3();
    setTimeout(bonus1, 10000); 
}

function bonus2(){
    //click toutes les secondes +0.01
    nbCoockies= nbCoockies + 10;
    compteurDnt.innerText = nbCoockies + ' DNT';
    unlockBonus1();
    unlockBonus2();
    unlockBonus3();
    setTimeout(bonus2, 10000); 
}

function bonus3(){
    //click toutes les secondes +0.1
    nbCoockies= nbCoockies + 100;
    compteurDnt.innerText = nbCoockies + ' DNT';
    unlockBonus1();
    unlockBonus2();
    unlockBonus3();
    setTimeout(bonus3, 15000); 
}

function buyBonus1(){
    //listeBonus.push('bonus1');
    bonus1();
    nbCoockies= nbCoockies - 15;
    compteurDnt.innerText = nbCoockies + ' DNT';
    lockBonus1();
    lockBonus2();
    lockBonus3();
}

function buyBonus2(){
    //listeBonus.push('bonus2');
    bonus2();
    nbCoockies= nbCoockies - 150;
    compteurDnt.innerText = nbCoockies + ' DNT';
    lockBonus1();
    lockBonus2();
    lockBonus3();
}

function buyBonus3(){
    //listeBonus.push('bonus3');
    bonus3();
    nbCoockies= nbCoockies - 1000;
    compteurDnt.innerText = nbCoockies + ' DNT';
    lockBonus1();
    lockBonus2();
    lockBonus3();
}

 