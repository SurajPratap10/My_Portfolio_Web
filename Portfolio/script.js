// <!----------------JS CODE----------------------->

// Page loader
window.addEventListener('load', function() {
    const loader = document.querySelector('.page-loader');
    if (loader) {
        setTimeout(() => {
            loader.style.opacity = '0';
            setTimeout(() => {
                loader.style.display = 'none';
            }, 500);
        }, 1000);
    }
});

// Custom cursor
document.addEventListener('DOMContentLoaded', function() {
    const cursor = document.createElement('div');
    const follower = document.createElement('div');
    cursor.className = 'cursor';
    follower.className = 'cursor-follower';
    document.body.appendChild(cursor);
    document.body.appendChild(follower);

    let mouseX = 0, mouseY = 0;
    let followerX = 0, followerY = 0;

    document.addEventListener('mousemove', function(e) {
        mouseX = e.clientX;
        mouseY = e.clientY;
        cursor.style.transform = `translate(${mouseX - 10}px, ${mouseY - 10}px)`;
    });

    function animateFollower() {
        followerX += (mouseX - followerX) * 0.1;
        followerY += (mouseY - followerY) * 0.1;
        follower.style.transform = `translate(${followerX - 20}px, ${followerY - 20}px)`;
        requestAnimationFrame(animateFollower);
    }
    animateFollower();

    // Cursor hover effects
    const hoverElements = document.querySelectorAll('a, button, .tab-links, .work, .services-list div');
    hoverElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursor.style.transform += ' scale(1.5)';
            follower.style.transform += ' scale(1.2)';
        });
        el.addEventListener('mouseleave', () => {
            cursor.style.transform = cursor.style.transform.replace(' scale(1.5)', '');
            follower.style.transform = follower.style.transform.replace(' scale(1.2)', '');
        });
    });
});

// Floating particles
function createParticles() {
    const particlesContainer = document.createElement('div');
    particlesContainer.className = 'particles';
    document.getElementById('header').appendChild(particlesContainer);

    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 6 + 's';
        particle.style.animationDuration = (Math.random() * 3 + 3) + 's';
        particlesContainer.appendChild(particle);
    }
}

// Navbar scroll effect
window.addEventListener('scroll', function() {
    const nav = document.querySelector('nav');
    if (window.scrollY > 100) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

// Reveal animation on scroll
function revealOnScroll() {
    const reveals = document.querySelectorAll('.reveal');
    
    reveals.forEach(reveal => {
        const windowHeight = window.innerHeight;
        const elementTop = reveal.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
            reveal.classList.add('active');
        }
    });
}

window.addEventListener('scroll', revealOnScroll);

// Initialize animations
document.addEventListener('DOMContentLoaded', function() {
    createParticles();
    
    // Add reveal class to sections
    const sections = document.querySelectorAll('#about, #services, #portfolio, #blog, #testimonials, #contact');
    sections.forEach(section => {
        section.classList.add('reveal');
    });
    
    // Stagger animation for service cards
    const serviceCards = document.querySelectorAll('.services-list div');
    serviceCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.2}s`;
        card.style.animation = 'fadeInUp 0.8s ease forwards';
    });
    
    // Stagger animation for work items
    const workItems = document.querySelectorAll('.work');
    workItems.forEach((item, index) => {
        item.style.animationDelay = `${index * 0.1}s`;
        item.style.animation = 'fadeInUp 0.8s ease forwards';
    });
    
    // Stagger animation for blog posts
    const blogPosts = document.querySelectorAll('.blog-post');
    blogPosts.forEach((post, index) => {
        post.style.animationDelay = `${index * 0.2}s`;
        post.style.animation = 'fadeInUp 0.8s ease forwards';
    });
});


        function opentab(tabname){
            for(tablink of tablinks){
                tablink.classList.remove("active-link");
            }
            for(tabcontent of tabcontents){
                tabcontent.classList.remove("active-tab");
            }

            event.currentTarget.classList.add("active-link");
            document.getElementById(tabname).classList.add("active-tab");
            
            // Trigger content animation
            const activeTab = document.getElementById(tabname);
            const listItems = activeTab.querySelectorAll('li');
            listItems.forEach((item, index) => {
                item.style.animationDelay = `${index * 0.1}s`;
                item.style.animation = 'none';
                setTimeout(() => {
                    item.style.animation = 'slideInContent 0.5s ease forwards';
                }, 10);
            });
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

// Enhanced timeline with stagger effect
document.addEventListener('DOMContentLoaded', function() {
    const timelineItems = document.querySelectorAll('.timeline li');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('in-view');
                }, index * 200);
            }
        });
    }, { threshold: 0.1 });
    
    timelineItems.forEach(item => {
        observer.observe(item);
    });
});


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

if (arrow) {
arrow.addEventListener('click', () => {
  window.scrollBy({
    top: window.innerHeight,
    left: 0,
    behavior: 'smooth'
  });
});
}

// Smooth reveal for testimonials
document.addEventListener('DOMContentLoaded', function() {
    const testimonials = document.querySelectorAll('.pn_testimonial_box');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.animationDelay = `${index * 0.3}s`;
                }, 100);
            }
        });
    }, { threshold: 0.1 });
    
    testimonials.forEach(testimonial => {
        observer.observe(testimonial);
    });
});

// Text typing effect enhancement
function enhancedTypeWriter() {
    const texts = ["Suraj Pratap..."];
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    const typeSpeed = 100;
    const deleteSpeed = 50;
    const pauseTime = 2000;
    
    function type() {
        const currentText = texts[textIndex];
        const outputElement = document.getElementById("autoType");
        
        if (!outputElement) return;
        
        if (isDeleting) {
            outputElement.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
        } else {
            outputElement.textContent = currentText.substring(0, charIndex + 1);
            charIndex++;
        }
        
        let speed = isDeleting ? deleteSpeed : typeSpeed;
        
        if (!isDeleting && charIndex === currentText.length) {
            speed = pauseTime;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % texts.length;
        }
        
        setTimeout(type, speed);
    }
    
    type();
}

// Initialize enhanced typewriter
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(enhancedTypeWriter, 1500);
});
