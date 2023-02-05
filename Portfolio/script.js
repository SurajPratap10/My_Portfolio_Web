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

var dataset = [" Suraj " + "  Pratap... "];
var datasetIndex = 0;
var data;
var pause = 1000;
var addTime = 200;
var removeTime = 150;
var letterIndex = 0;
var currentInterval;

var autoType = document.getElementById("autoType");

function textRotation() {
  if(datasetIndex == dataset.length) {
    datasetIndex = 0;
  };
  
  data = dataset[datasetIndex];
  letterIndex = 0;
  autoType.className = "";
  currentInterval = window.setInterval(addLetter, addTime);
};

function addLetter() {
  autoType.innerHTML += data.charAt(letterIndex);
  letterIndex += 1;
  
  if(letterIndex > data.length) {
    autoType.className = "caretAnimation";
    window.clearInterval(currentInterval);
    window.setTimeout(startRemove, pause);
  };
};

function startRemove() {
  currentInterval = window.setInterval(removeLetter, removeTime);
}

function removeLetter() {
  var currentString = autoType.innerHTML;
  autoType.innerHTML = currentString.slice(0, -1);
  
  if(currentString.length < 1) {
    window.clearInterval(currentInterval);
    datasetIndex += 1;
    textRotation();
  };
};

window.onload = window.setTimeout(textRotation, 500);




// Theme Toggler

const chk = document.getElementById('chk');

chk.addEventListener('change', () => {
	document.body.classList.toggle('dark');
});


