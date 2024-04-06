
  (function ($) {
  
  "use strict";

    // AOS ANIMATIONS
    AOS.init();

    // NAVBAR
    $('.navbar-nav .nav-link').click(function(){
        $(".navbar-collapse").collapse('hide');
    });

    // NEWS IMAGE RESIZE
    function NewsImageResize(){
      $(".navbar").scrollspy({ offset: -76 });
      
      var LargeImage = $('.large-news-image').height();

      var MinusHeight = LargeImage - 6;

      $('.news-two-column').css({'height' : (MinusHeight - LargeImage / 2) + 'px'});
    }

    $(window).on("resize", NewsImageResize);
    $(document).on("ready", NewsImageResize);

    $('a[href*="#"]').click(function (event) {
      if (
        location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          event.preventDefault();
          $('html, body').animate({
            scrollTop: target.offset().top - 66
          }, 1000);
        }
      }
    });
    
  })(window.jQuery);
// TEXTE DEFILANT
  document.addEventListener("DOMContentLoaded", function () {
    var mots = ["Nouveau look.", "Un nouveau design.", "Une passion inchangée."];
    var index = 0;
    var texteChangeant = document.getElementById('texte-changeant');

    function changerTexteAvecTransition() {
        texteChangeant.style.opacity = 0; // Définir l'opacité à 0
        setTimeout(function () {
            texteChangeant.textContent = mots[index];
            texteChangeant.style.opacity = 1; // Définir l'opacité à 1 après avoir changé le texte
            index = (index + 1) % mots.length;
        }, 500); // Délai de 500 ms pour la transition
    }

    changerTexteAvecTransition(); // Appeler la fonction une fois au début

    setInterval(changerTexteAvecTransition, 4000); // Changer le texte toutes les 2 secondes
});  
