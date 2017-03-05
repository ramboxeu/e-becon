const Elem = (function(){
  //catch elems from index.html
  const zlocisze = function(){
    document.querySelector('#zlocisze').textContent = Staty.zlocisze;
  }
  const hiperzlocisze = function(){
    document.querySelector('#hiper-zlocisze').textContent = Staty.hiperZlocisze;
  }
  const polerzepak = function(){
    document.querySelector('#pole-rzepak').textContent = Staty.poleRzepak;
  }
  const polezborze = function(){
    document.querySelector('#pole-zborze').textContent = Staty.poleZborze;
  }
  const rzepak = function(){
    document.querySelector('#rzepak').textContent = Staty.rzepak;
  }
  const zborze = function(){
    document.querySelector('#zborze').textContent = Staty.zborze;
  }
  const swinki = function(){
    document.querySelector('#swinki').textContent = Staty.swinki;
  }
  const kupioneswinki = function(){
    document.querySelector('#kupione-swinki').textContent = Staty.swinki;
  }
  const becon = function(){
    document.querySelector('#becon').textContent = Staty.becon;
  }
  const traktoryrzepak = function(){
    document.querySelector('#traktory-rzepak').textContent = Staty.traktoryRzepak;
  }
  const traktoryzborze = function(){
    document.querySelector('#traktory-zborze').textContent = Staty.traktoryZborze;
  }
  const olej = function(){
    document.querySelector('#olej').textContent = Staty.olej;
  }

  //return catcheds elems form index html
  return{
    zlocisze : zlocisze,
    hiperZlocisze : hiperzlocisze,
    poleRzepak : polerzepak,
    poleZborze : polezborze,
    rzepak : rzepak,
    zborze : zborze,
    swinki : swinki,
    becon : becon,
    traktoryRzepak : traktoryrzepak,
    traktoryZborze : traktoryzborze,
    olej : olej
  }
})();
