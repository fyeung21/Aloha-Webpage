// console.log ('Hello World');

// let myName = 'MyWebsite';

// myName = 'My new name';

// alert(myName);

// //

// let nameEL = document.getElementByID('name');


document.addEventListener("DOMContentLoaded", function() {
    
    const elem = document.querySelector('.main-carousel');
    const flkty = new Flickity(elem, {
        // options
        cellAlign: 'center',
        contain: true,
        draggable: true,
        groupCells: 4,
        autoPlay:2000
    });

    const navLinks = document.querySelectorAll('#navigation li a');
    
    navLinks.forEach(function(link) {
        link.addEventListener("click", function(event){
            console.log(event);
            document.querySelector('#about').scrollIntoView({behavior: 'smooth'})
            
        });
        // document.getElementById('about').scrollIntoView({behavior:'smooth'})
        
        // add click listener for the element in this iteration of the loop
        // how can you get the "href" attribute value of the clicked element to create a string that corresponds the id of the correct section?
        // get the section by its id using the string from the last step
        // scroll to that section with .scrollIntoView()
    });
    
});
