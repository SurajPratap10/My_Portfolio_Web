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


