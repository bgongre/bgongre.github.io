var navLi = document.querySelectorAll('.item');

//create click event for nav items
navLi.forEach((navItem) => {
  navItem.querySelector('a').addEventListener('click', activeNav);
});

//add and remove 'active' class from nav item
function activeNav(e) {
  var activeLinks = document.querySelectorAll(".active");
  var clickedLink = e.target;
  activeLinks.forEach((activeLink) => {
    activeLink.classList.remove('active');
  });

  clickedLink.parentElement.classList.add('active');
}

//Scroll back to top button
$(document).ready(function(){

    //Check to see if the window is top if not then display button
    $(window).scroll(function(){
        if ($(this).scrollTop() > 100) {
            $('.scrollToTop').fadeIn();
        } else {
            $('.scrollToTop').fadeOut();
        }
    });

    //Click event to scroll to top
    $('.scrollToTop').click(function(){
        $('html, body').animate({scrollTop : 0},800);
        return false;
    });
});

//Smooth scrolling anchors
$(document).ready(function(){
  //Add smooth scrolling to anchors
  $("a").on('click', function(event) {

    if (this.hash !== "") {
      event.preventDefault();

      var hash = this.hash;

      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        window.location.hash = hash;
      });
    } 
  });
});
