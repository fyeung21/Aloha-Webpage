
document.addEventListener("DOMContentLoaded", function() {
    
    const elem = document.querySelector('.main-carousel');
    const flkty = new Flickity(elem, {

        cellAlign: 'left',
        contain: true,
        draggable: true,
        prevNextButtons: false,
        autoPlay:5000
    });

    const addCart = document.querySelectorAll('.carousel-cell button');
    let number = 0;
    addCart.forEach(function(add) {
        add.addEventListener('click', function(){
            number++;
            document.getElementById('counter').innerHTML = number;
        })
    })


    const navLinks = document.querySelectorAll('.navigation li a');
    
    navLinks.forEach(function(link) {
        link.addEventListener("click", function(event){
            event.preventDefault();
            document.querySelector(event.target.hash).scrollIntoView({behavior: 'smooth'})
            
        });

    });
    
    
    let submitClick = document.getElementById('submit-button');

    submitClick.addEventListener('click', function validateForm(event) {
        event.preventDefault();
        let input = document.getElementById ('input');
            if(input.value === "") {
                alert("Please Enter a Valid Email Address.");
    
            }
            else {
                alert("Thanks For Subscribing!");
       
    }

    });

});
