const zasoby = {
  zlocisze : 0,
  poleZborze : 0,
  poleRzepak : 0,
  zborze : 0,
  rzepak : 0,
  olej : 0,
  becon : 0,
  swinki : 0,
  kupioneSwinki : 0,
  traktorZborze : 0,
  traktorRzepak : 0
}

//test code for new version
/*function new() {
  let zlocisze = 10000000,
  let poleZborze = 10,
  let poleRzepak = 10,
  let zborze = 1000,
  let rzepak = 1000,
  let olej = 1000,
  let becon = 1000,
  let swinki = 1000,
  let kupioneSwinki = 10000,
  let traktorZborze = 0,
  let traktorRzepak = 0
  const przyciski = document.querySelectorAll('.akcja');
  przyciski.forEach( przycisk => {
    przycisk.addEventListener('click', function () {
      //this[przycisk.dataset.klik];
      const fun = przycisk.dataset.klik;
      EBecon[fun]();
    });
  });
}*/

const EBecon = (function(){
  const start = function () {
    klik();
    aktualizacja();
  }

  const klik = function (){
    const przyciski = document.querySelectorAll('.akcja');
    przyciski.forEach( przycisk => {
      przycisk.addEventListener('click', function () {
        //this[przycisk.dataset.klik];
        const fun = przycisk.dataset.klik;
        EBecon[fun]();
      });
    });
  }

  const aktualizacja = function () {
    return firebase.database().ref('Update').once('value').then(function(snapshot) {
      const dzien = snapshot.val().Day;
      const miesac = snapshot.val().Month;
      const opis = snapshot.val().Description;
      const wersja = snapshot.val().Version;
      const teraz = new Date();
      if (((teraz.getMonth())+1) === Number(miesac) && (teraz.getDate()) < Number(dzien) ) {
        //console.log('wszystko działa');
        document.querySelector('#wersja').textContent = wersja;
        document.querySelector('#opis').textContent = opis;
        $('#aktualizacja').modal('open');
      } else {
        console.log('Brak aktualizacji');
      }

      // ...
    });
  }

  const pokaz = function (idName, varName){
    document.querySelector(`#${idName}`).textContent = zasoby[varName];
  }

  const pracuj = function(){
    zasoby.zlocisze++;
    pokaz('zlocisze', 'zlocisze');
  }
  const zbierzZborze = function () {
    if(zasoby.poleZborze > 0){
      zasoby.zborze++;
      pokaz('zborze', 'zborze');
    } else {

    }
  }
  const zbierzRzepak = function () {
    if(zasoby.poleRzepak > 0){
      zasoby.rzepak++;
      pokaz('rzepak', 'rzepak');
    } else {

    }
  }
  const zrobBecon = function () {
    if(zasoby.olej > 0 && zasoby.swinki > 0){
      zasoby.becon++;
      zasoby.olej--;
      zasoby.swinki--;
      pokaz('becon', 'becon');
      pokaz('olej', 'olej');
      pokaz('swinki', 'swinki');
    } else {

    }
  }
  const zrobOlej = function () {
    if(zasoby.rzepak > 0){
      zasoby.olej++;
      zasoby.rzepak--;
      pokaz('rzepak', 'rzepak');
      pokaz('olej', 'olej');
    } else {

    }
  }
  const karmSwinke = function () {
    if(zasoby.kupioneSwinki > 0 && zasoby.zborze > 0){
      zasoby.swinki++;
      zasoby.zborze--;
      zasoby.kupioneSwinki--;
      pokaz('zborze', 'zborze');
      pokaz('kupione-swinki', 'kupioneSwinki');
      pokaz('swinki', 'swinki');
    } else {

    }
  }

  const kupPoleZ = function () {
    if(zasoby.zlocisze >= 100){
      zasoby.poleZborze++;
      zasoby.zlocisze -= 100;
      pokaz('zlocisze', 'zlocisze');
      pokaz('pole-zborze', 'poleZborze');
    } else {

    }
  }

  const kupPoleR = function () {
    if(zasoby.zlocisze >= 100){
      zasoby.poleRzepak++;
      zasoby.zlocisze -= 100;
      pokaz('zlocisze', 'zlocisze');
      pokaz('pole-rzepak', 'poleRzepak');
    } else {

    }
  }

  const kupTraktorZ = function () {
    if(zasoby.zlocisze >= 10000){
      zasoby.traktorZborze++;
      zasoby.zlocisze -= 10000;
      pokaz('zlocisze', 'zlocisze');
      pokaz('traktor-zborze', 'traktorZborze');
    } else {

    }
  }

  const kupTraktorR = function () {
    if(zasoby.zlocisze >= 10000){
      zasoby.traktorRzepak++;
      zasoby.zlocisze -= 10000;
      pokaz('zlocisze', 'zlocisze');
      pokaz('traktor-rzepak', 'traktorRzepak');
    } else {

    }
  }

  const kupSwinke = function () {
    if(zasoby.zlocisze >= 10){
      zasoby.kupioneSwinki++;
      zasoby.zlocisze -= 10;
      pokaz('zlocisze', 'zlocisze');
      pokaz('kupione-swinki', 'kupioneSwinki');
    } else {

    }
  }

  return {
    pracuj : pracuj,
    zbierzZborze : zbierzZborze,
    zbierzRzepak :zbierzRzepak,
    zrobBecon : zrobBecon,
    karmSwinke : karmSwinke,
    kupPoleZ : kupPoleZ,
    kupPoleR : kupPoleR,
    kupTraktorZ : kupTraktorZ,
    kupTraktorR : kupTraktorR,
    kupSwinke : kupSwinke,
    zrobOlej : zrobOlej,
    start : start,
  }
})();

window.addEventListener('load', function () {
  EBecon.start();
});
