const bello = document.querySelector('.fa-bell').addEventListener('click', showNoti);
function showNoti() {   
    document.querySelector('.notif').style.display = "block";
        setTimeout(function() {
            document.querySelector('.notif').style.display = "none";
        }, 3000)    
}

const belli = document.querySelector('.berro').addEventListener('click', showNoti);
function showNoti() {   
    document.querySelector('.notif').style.display = "block";
        setTimeout(function() {
            document.querySelector('.notif').style.display = "none";
        }, 3000)    
}

//welcome//

document.addEventListener('DOMContentLoaded', getInfo)
let newDat = document.querySelector('#fmail');
let neewDatt = document.querySelector('#smail');


function getInfo() {
const infom = localStorage.getItem('mailTest');
newDat.appendChild(document.createTextNode(infom));
neewDatt.appendChild(document.createTextNode(infom));
needr.appendChild(document.createTextNode(infom));
} 



    document.addEventListener('DOMContentLoaded', getInffo)
    const needr = document.querySelector('#nameTest');
    const lasto = document.querySelector('#lastTest')
    const mailo = document.querySelector('#mailTest')
    const phone = document.querySelector('#phone')
  
  function getInffo() {  
    const firstoo = localStorage.getItem('nameTest');
    const lastoo = localStorage.getItem('lastTest');
    const mailoo = localStorage.getItem('mailTest');
    const pnum = localStorage.getItem('pnumTest');
    
    needr.appendChild(document.createTextNode(firstoo));
    lasto.appendChild(document.createTextNode(lastoo));
    mailo.appendChild(document.createTextNode(mailoo));
    phone.appendChild(document.createTextNode(pnum));
  } 


  document.getElementById('pune').addEventListener('click', popi);
  const popin =  document.getElementById('popi');
  function popi(){
    popin.classList.toggle('show');
      
  }