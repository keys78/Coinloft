window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0)
});

//////////// INVESTMENT BUTTONS////////////////////////////////

const about = document.querySelector(".about");
const btns = document.querySelectorAll(".tab-btn");
const articles = document.querySelectorAll(".content");
about.addEventListener("click", function (e) {
const id = e.target.dataset.id;
if (id) {
// remove selected from other buttons
btns.forEach(function (btn) {
btn.classList.remove("active");
});
e.target.classList.add("active");
// hide other articles
articles.forEach(function (article) {
article.classList.remove("active");
});
const element = document.getElementById(id);
element.classList.add("active");
}
});


//QUESTIONS/////////////////////////////////
        
const questions = document.querySelectorAll(".question");

questions.forEach(function (question) {
  const btn = question.querySelector(".question-btn");
  // console.log(btn);

  btn.addEventListener("click", function () {
    // console.log(question);

    questions.forEach(function (item) {
      if (item !== question) {
        item.classList.remove("show-text");
     
      }
    });

    question.classList.toggle("show-text");
   
  });
});


/////////////LOADER/////////////////////////////
document.addEventListener("DOMContentLoaded", function() {
    const roso = document.getElementById('loader');
    const rosoh = document.querySelector('.rosoh');

    setTimeout(function(){
           rosoh.remove();
       }, 4000);
    setTimeout(function(){
           roso.remove();
       }, 6000);
   });  


   ///Translate ////
   
 

