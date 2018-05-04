

// var itemContainer = document.getElementById("nav-item");
// var item = btnContainer.getElementByClassName("item");
//
// for (var i = 0; i < item.length; i++) {
//   item[i].addEventListener("click", function(){
//     var current = document.getElementByClassName("active");
//     current[0].className = current[0].className.replace(" active", "");
//     this.className += " active";
//   });
// }

var navLi = document.querySelectorAll('.item');

navLi.forEach((navItem) => {
  navItem.querySelector('a').addEventListener('click', activeNav);
});

function activeNav(e) {
  var activeLinks = document.querySelectorAll(".active");
  var clickedLink = e.target;
  activeLinks.forEach((activeLink) => {
    activeLink.classList.remove('active');
  });

  clickedLink.parentElement.classList.add('active');

}
