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
} 

// document.addEventListener('DOMContentLoaded', getIfo)
// let newDat = document.querySelector('#fmail');

// function getIfo() {
// const ifom = localStorage.getItem('mailKest');
// newDat.innerHTML = ifom;
// } 