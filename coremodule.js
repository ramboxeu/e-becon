const Core = (function(){
  const ring = function(stan){
    const dzwonek = document.querySelector('#dzwonek');
    switch(stan){
      case 0:
        dzwonek.innerHTML = "notifications";
        break;
      case 1:
        dzwonek.innerHTML = "notifications_active";
        break;
    }
  }
  const notify = function(text, rodzaj){
    /*const ikonka = document.querySelector('notify-icon');
    const tekst = document.querySelector('notify-text');
    switch(rodzaj){
      case 'info':
        ikonka.innerHTML = "info";
        tekst.textContent = text;
        break;
      case 'error':
        ikonka.innerHTML = "error";
        tekst.textContent = text;
        break;
    }*/
    alert(text);
  }
  const achivment = function(osiagnienie){
    /*
    const list = document.querySelector('#achivments');
    const li = document.createElement('LI');
    const div = document.createElement('DIV');
    const a = document.createElement('A');
    const btnText = document.createTextNode('Zbierz');
    const text = document.createTextNode(`Osiagniecie: ${osiagnienie}`);
    a.appendChild(btnText);
    div.appendChild(text);
    div.appendChild(a);
    li.appendChild(div);
    list.appendChild(li);
    div.classList.add('z-depth-1');
    a.classList.add('btn');
    a.classList.add('waves-effect');
    a.classList.add('waves-light');
    a.classList.add('red');
    a.setAttribute('onclick', 'Core.removeAchivment(this)');
    */
  }
  return{
    dodajOsiagniecie : achivment,
    usunOsiagniecie : removeAchivment,
    powiadomienie : notify,
  }
})();
