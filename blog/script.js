$(document).ready(function() {
    
    $('html, body').animate(
        {
            scrollTop: $('#Accueil').offset().top
        },
        800
    );
        
    // Smooth scroll to sections
    $('.nav-link').on('click', function(event) {
        if (this.hash !== '') {
            event.preventDefault();

            const hash = this.hash;

            $('html, body').animate(
                {
                    scrollTop: $(hash).offset().top
                },
                800
            );
        }
    });

    // au clic sur un lien de la nav bar
    $('nav a').click(function(event) {
        event.preventDefault();
        var sectionToShow = $(this).attr('href');
        
        // on cache toutes les sections
        $('.container').removeClass('active');

        // on affiche la section correspondante
        $(sectionToShow).addClass('active');
        
        // on fait défiler la page jusqu'à la section correspondante
        $('html, body').animate({
            scrollTop: $(sectionToShow).offset().top
        }, 'slow');
    });





     // au clic sur un lien de la nav bar
     $('div a').click(function(event) {
        event.preventDefault();
        var sectionToShow = $(this).attr('href');
        
        // on cache toutes les sections
        $('.container').removeClass('active');

        // on affiche la section correspondante
        $(sectionToShow).addClass('active');
        
        // on fait défiler la page jusqu'à la section correspondante
        $('html, body').animate({
            scrollTop: $(sectionToShow).offset().top
        }, 'slow');
    });






});

const links = document.querySelectorAll(".navbar-nav .nav-link");
const containers = document.querySelectorAll(".container-proje");

links.forEach((link, index) => {
  link.addEventListener("click", () => {
    containers.forEach((container) => {
      container.classList.add("hidden");
    });
    containers[index].classList.remove("hidden");
  });
});

