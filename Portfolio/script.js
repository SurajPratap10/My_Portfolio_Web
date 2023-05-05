// <!----------------JS CODE----------------------->



        function opentab(tabname){
            for(tablink of tablinks){
                tablink.classList.remove("active-link");
            }
            for(tabcontent of tabcontents){
                tabcontent.classList.remove("active-tab");
            }

            event.currentTarget.classList.add("active-link");
            document.getElementById(tabname).classList.add("active-tab");
        }
        var tablinks = document.getElementsByClassName("tab-links");
        var tabcontents = document.getElementsByClassName("tab-contents");






// <!--------MENU CLICK FUNCTIONALLITY  (for small screens)----------->



    var slidemenu = document.getElementById("slidemenu");

    function openmenu(){
        slidemenu.style.right = "0";

    }

    function closemenu(){
        slidemenu.style.right = "-200px";

    }






// <!--------GOOGLE  FORM SHEETS VIA CONTACT------------->


    const scriptURL = 'https://script.google.com/macros/s/AKfycbwg9P5tCVNK4hH4nBpgdcQVVhj6d2Hcvr_uTlGYbuB54biMRuBM7joUTL_S4LU1qUI2/exec'
    const form = document.forms['submit-to-google-sheet']
    const msg = document.getElementById("msg")
  
    form.addEventListener('submit', e => {
      e.preventDefault()
      fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => {
            msg.innerHTML = "Message sent successfully" 
            setTimeout(function(){
                
                msg.innerHTML = ""

            },5000)

            form.reset()
        })
        .catch(error => console.error('Error!', error.message))
    })


//Autotype JS code:
const dataset = ["Suraj Pratap..."];
let datasetIndex = 0;
let outputElement;
const pause = 1000;
const addTime = 150; // slower typing animation
const removeTime = 100; // slower removing animation
let letterIndex = 0;
let currentInterval;

function init() {
  outputElement = document.getElementById("autoType");
  textRotation();
}

function textRotation() {
  if (datasetIndex === dataset.length) {
    datasetIndex = 0;
  }
  const data = dataset[datasetIndex];
  letterIndex = 0;
  outputElement.className = "";
  currentInterval = setInterval(addLetter, addTime);
}

function addLetter() {
  outputElement.innerHTML += dataset[datasetIndex].charAt(letterIndex);
  letterIndex += 1;

  if (letterIndex > dataset[datasetIndex].length) {
    outputElement.className = "createAnimation";
    clearInterval(currentInterval);
    setTimeout(startRemove, pause);
  }
}

function startRemove() {
  currentInterval = setInterval(removeLetter, removeTime);
}

function removeLetter() {
  const currentString = outputElement.innerHTML;
  const newString = currentString.substring(0, currentString.length - 1);
  outputElement.innerHTML = newString;

  if (currentString.length < 1) {
    clearInterval(currentInterval);
    datasetIndex += 1;
    textRotation();
  } else {
    if (newString.length < 1) {
      clearInterval(currentInterval);
      setTimeout(startRemove, pause);
    }
  }
}

setTimeout(init, pause); // set the delay to pause instead



// Theme Toggler:

const chk = document.getElementById('chk');

chk.addEventListener('change', () => {
	document.body.classList.toggle('dark');
});



// Timeline Functionality:
(function () {
  "use strict";
  var items = document.querySelectorAll(".timeline li");

  function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
      rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) * 0.5
    );
  }

  function callbackFunc() {
    for (var i = 0; i < items.length; i++) {
      if (isElementInViewport(items[i])) {
        items[i].classList.add("in-view");
      }
    }
  }

  // listen for scroll event
  window.addEventListener("scroll", callbackFunc);
})();



// BACK TO TOP ARROW BUTTON:

const upArrowBtn = document.getElementById("up-arrow-btn");

// Show or hide the up arrow button based on scroll position
window.addEventListener("scroll", function () {
  if (window.pageYOffset > 500) {
    upArrowBtn.style.display = "block";
  } else {
    upArrowBtn.style.display = "none";
  }
});

// Scroll to the top of the page when the up arrow button is clicked
upArrowBtn.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

var arrowBtn = document.getElementById("up-arrow-btn");

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

arrowBtn.addEventListener("click", function () {
  arrowBtn.classList.add("loading");
  setTimeout(function () {
    arrowBtn.classList.remove("loading");
  }, 2000);
  scrollToTop();
});


const arrow = document.querySelector('.arrow');

arrow.addEventListener('click', () => {
  window.scrollBy({
    top: window.innerHeight,
    left: 0,
    behavior: 'smooth'
  });
});



