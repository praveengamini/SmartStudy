window.addEventListener("load", () => {
    const loader = document.querySelector(".loader");
  
    loader.classList.add("loader--hidden");
  
    loader.addEventListener("transitionend", () => {
      document.body.removeChild(loader);
    });
  });
  const activePage = window.location.pathname;
  const navLinks = document.querySelectorAll('nav a').forEach(link => {
    if(link.href.includes(`${activePage}`)){
      link.classList.add('active');
      console.log(link);
    }
  })
   // Get the carousel element
   var carousel = document.getElementById("carouselExample");

   // Start the carousel interval (3000 milliseconds = 3 seconds)
   var carouselInterval = setInterval(function() {
     carousel.querySelector(".carousel-control-next").click();
   }, 3000);
 
   // Pause the carousel interval when the mouse is over the carousel
   carousel.addEventListener("mouseover", function() {
     clearInterval(carouselInterval);
   });
 
   // Resume the carousel interval when the mouse leaves the carousel
   carousel.addEventListener("mouseout", function() {
     carouselInterval = setInterval(function() {
       carousel.querySelector(".carousel-control-next").click();
     }, 3000);
   });
   document.addEventListener("DOMContentLoaded", function() {
    const navbarLinks = document.querySelectorAll(".navbar a");

    navbarLinks.forEach(link => {
      link.addEventListener("click", function(event) {
        // Remove 'active' class from all links
        navbarLinks.forEach(link => {
          link.classList.remove("active");
        });

        // Add 'active' class to the clicked link
        this.classList.add("active");
      });
    });
  });