
document.addEventListener("DOMContentLoaded", function() {
    
    const elem = document.querySelector('.main-carousel');
    const flkty = new Flickity(elem, {

        cellAlign: 'left',
        contain: true,
        draggable: true,
        prevNextButtons: false,
        autoPlay:5000
    });

    const navLinks = document.querySelectorAll('#navigation li a');
    
    navLinks.forEach(function(link) {
        link.addEventListener("click", function(event){
            event.preventDefault();
            document.querySelector(event.target.hash).scrollIntoView({behavior: 'smooth'})
            
        });

    });
    
    
    let submitClick = document.getElementById('submit-button');

    submitClick.addEventListener("click", function(event){

    event ='Thanks For Subscribing!';

    alert(event);
    });

});
