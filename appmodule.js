const App = (function(){
  //TODO : Make e-bacon better
  //TODO : możliwość kupowania swinek, moduł do cen
  //public method wrok
  const work = function(){
    Staty.zlocisze += 1;
    Elem.zlocisze();
  };

  //public method buyfields
  const buyfields = function(jakie){
    switch(jakie){
      case 'rzepak':
        if(Staty.zlocisze > 100){
          Staty.poleRzepak++;
          Staty.zlocisze -= 100;
          Elem.zlocisze();
          Elem.poleRzepak();
        }else{
          Core.powiadomienie('Brak środków', 'error');
        }
        break;
      case 'zborze':
        if(Staty.zlocisze > 100){
          Staty.poleZborze++;
          Staty.zlocisze -= Ceny.poleZborze;
          Elem.poleZborze();
        }else{

        }
        break;
    }
  };

  //public method farmfields
  const farmfields = function(jakie){
    switch(jakie){
      case 'rzepak':
        if(Staty.poleRzepak > 0){
          Staty.rzepak += Staty.poleRzepak;
          Elem.rzepak();
        }else{

        }
        break;
      case 'zborze':
        if(Staty.poleZborze > 0){
          Staty.zborze += Staty.poleZborze;
          Elem.zborze();
        }else{

        }
        break;
    }
  };

  //public method getbacon
  const getbacon = function(){
    if(Staty.swinki > 0){
      Staty.swinki--;
      Elem.swinki();
      Staty.becon++;
      Elem.becon();
    }else{

    }
  };

  //public method get oil
  const getoil = function(){
    if(Staty.rzepak > 5){
      Staty.rzepak -= 5;
      Elem.rzepak();
      Staty.olej++;
      Elem.olej();
    }else{

    }
  }

  //public method getpig
  const getpig = function(){
    if(Staty.zlocisze > Ceny.swinka){
      Staty.zlocisze -= 10;
      Elem.zlocisze();
      Staty.swinki++;
      Elem.swinki();
    }else{

    }
  }

  //public method sellbacon
  const sellbacon = function(){
    if(Staty.becon > 0){
      Staty.becon--;
      Elem.becon();
      Staty.zlocisze++;
      Elem.zlocisze();
    }else{

    }
  };

  //public method tractors
  const tractors = function(jakie){
    switch(jakie){
      case 'rzepak':
        if(Staty.zlocisze > 1000){
          Staty.zlocisze -= Ceny.traktoryRzepak;
          Elem.zlocisze();
          Staty.traktoryRzepak++;
          Elem.traktoryRzepak;
        }else{

        }
        break;
      case 'zborze':
        if(Staty.zlocisze > 1000){
          Staty.zlocisze -= Ceny.traktoryZborze;
          Elem.zlocisze;
          Staty.traktoryZborze++;
          Elem.traktoryZborze;
        }else{

        }
        break;
    }
  };

  //return public methods
  return {
    pracuj : work,
    kupPole : buyfields,
    farmPole : farmfields,
    upieczBecon : getbacon,
    sprzedajBecon : sellbacon,
    kupTraktor : tractors,
    zrobOlej : getoil,
    kupSwinke : getpig
  }
})();{\rtf1}
