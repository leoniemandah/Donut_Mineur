var nbDonuts;
var btnBonus1;
var btnBonus2;
var btnBonus3;
var compteurDnt;
var listeBonus;
var BonusInfo1;
var BonusInfo2;
var BonusInfo3;
var addDonut1;
var addDonut2;
var addDonut3;

function initGame() {
    nbDonuts = 1000;
    btnBonus1 = document.getElementById('Buy1');
    btnBonus2 = document.getElementById('Buy2');
    btnBonus3 = document.getElementById('Buy3');
    BonusInfo1 = document.querySelector('.bonusInfo1 p');
    BonusInfo2 = document.querySelector('.bonusInfo2 p');
    BonusInfo3 = document.querySelector('.bonusInfo3 p');
    compteurDnt = document.getElementById('profit');
    profitDNT = document.getElementById('profitDNT');
    compteurDnt.innerText = nbDonuts + ' Donuts';
    profitDNT.innerText = nbDonuts / 1000 + ' DNT';
    profitDNT.innerText = nbDonuts / 1000 + ' DNT';
    unlockBonus1();
    unlockBonus2();
    unlockBonus3();
}

function clickDonut() {
    nbDonuts = nbDonuts + 1;
    compteurDnt.innerText = nbDonuts + ' Donuts';
    profitDNT.innerText = nbDonuts / 1000 + ' DNT';
    unlockBonus1();
    unlockBonus2();
    unlockBonus3();
}

function lockBonus1() {
    if (nbDonuts <= 15) {
        btnBonus1.src = "../assets/cadenas-ferme.png";
        btnBonus1.removeAttribute("onclick");
        btnBonus1.disabled = true;
    }
}

function unlockBonus1() {
    if (nbDonuts >= 15) {
        btnBonus1.src = "../assets/flat-g143731738_1280.png";
        btnBonus1.setAttribute("onclick", "buyBonus1()");
        btnBonus1.disabled = false;
    }
}

function lockBonus2() {
    if (nbDonuts <= 150) {
        btnBonus2.src = "../assets/cadenas-ferme.png";
        btnBonus2.removeAttribute("onclick");
        btnBonus2.disabled = true;
    }
}

function unlockBonus2() {
    if (nbDonuts >= 150) {
        btnBonus2.src = "../assets/homer.png";
        btnBonus2.setAttribute("onclick", "buyBonus2()");
        btnBonus2.disabled = false;
    }
}

function lockBonus3() {
    if (nbDonuts <= 1000) {
        btnBonus3.src = "../assets/cadenas-ferme.png";
        btnBonus3.removeAttribute("onclick");
        btnBonus3.disabled = true;
    }
}

function unlockBonus3() {
    if (nbDonuts >= 1000) {
        btnBonus3.src = "../assets/industry.png";
        btnBonus3.setAttribute("onclick", "buyBonus3()");
        btnBonus3.disabled = false;
    }
}

function bonus1() {
    //click toutes les secondes +0.001
    nbDonuts = nbDonuts + addDonut1;
    compteurDnt.innerText = nbDonuts + ' Donuts';
    profitDNT.innerText = nbDonuts / 1000 + ' DNT';
    unlockBonus1();
    unlockBonus2();
    unlockBonus3();
    setTimeout(bonus1, 5000);
}

function bonus2() {
    //click toutes les secondes +0.01
    nbDonuts = nbDonuts + addDonut2;
    compteurDnt.innerText = nbDonuts + ' Donuts';
    profitDNT.innerText = nbDonuts / 1000 + ' DNT';
    unlockBonus1();
    unlockBonus2();
    unlockBonus3();
    setTimeout(bonus2, 10000);
}

function bonus3() {
    //click toutes les secondes +0.1
    nbDonuts = nbDonuts + addDonut3;
    compteurDnt.innerText = nbDonuts + ' Donuts';
    profitDNT.innerText = nbDonuts / 1000 + ' DNT';
    unlockBonus1();
    unlockBonus2();
    unlockBonus3();
    setTimeout(bonus3, 15000);
}

function buyBonus1() {
    //listeBonus.push('bonus1');
    if (addDonut1 == null) {
        addDonut1 = 1
        BonusInfo1.innerText = `Permets de générer ${addDonut1} Donuts toutes les 5 secondes`
        bonus1()
    } else {
        addDonut1++
        BonusInfo1.innerText = `Permets de générer ${addDonut1} Donuts toutes les 5 secondes`
    }
    nbDonuts = nbDonuts - 15;
    compteurDnt.innerText = nbDonuts + ' Donuts';
    profitDNT.innerText = nbDonuts / 1000 + ' DNT';
    lockBonus1();
    lockBonus2();
    lockBonus3();
}

function buyBonus2() {
    //listeBonus.push('bonus2');
    if (addDonut2 == null) {
        addDonut2 = 50
        BonusInfo2.innerText = `Permets de générer ${addDonut2} Donuts toutes les 5 secondes`
        bonus2()
    } else {
        addDonut2 += 50
        BonusInfo2.innerText = `Permets de générer ${addDonut2} Donuts toutes les 5 secondes`
    }
    nbDonuts = nbDonuts - 150;
    compteurDnt.innerText = nbDonuts + ' Donuts';
    profitDNT.innerText = nbDonuts / 1000 + ' DNT';
    lockBonus1();
    lockBonus2();
    lockBonus3();
}

function buyBonus3() {
    //listeBonus.push('bonus3');
    if (addDonut3 == null) {
        addDonut3 = 100
        BonusInfo3.innerText = `Permets de générer ${addDonut3} Donuts toutes les 15 secondes`
        bonus3()
    } else {
        addDonut3 += 100
        BonusInfo3.innerText = `Permets de générer ${addDonut3} Donuts toutes les 15 secondes`
    }

    nbDonuts = nbDonuts - 1000;
    compteurDnt.innerText = nbDonuts + ' Donuts';
    profitDNT.innerText = nbDonuts / 1000 + ' DNT';
    lockBonus1();
    lockBonus2();
    lockBonus3();
}