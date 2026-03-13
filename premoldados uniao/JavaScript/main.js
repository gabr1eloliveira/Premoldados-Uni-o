$(document).ready(function(){
    $('#menu-btn-mobile').on('click', function(){
        $('#navbar-mobile').toggleClass('active')
        $('#menu-btn-mobile').find('i').toggleClass("fa-x fa-bars")
    });
});

function toggleMenu(){
  document.querySelector(".menu-btn-mobile").classList.toggle("active");
  document.querySelector(".menu").classList.toggle("active");
}