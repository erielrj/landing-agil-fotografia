function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}


/* Colocando o evento click nos links da sidenav para disparar as função closeNav  */

(function () {
  const navLinks = document.querySelectorAll('nav > a');

  for (link of navLinks) {
    link.addEventListener('click', function () {
      closeNav();
    })
  }

})();
