// console.log ('Hello World');

// let myName = 'MyWebsite';

// myName = 'My new name';

// alert(myName);

// //

// let nameEL = document.getElementByID('name');


document.addEventListener("DOMContentLoaded", function() {
    
    const navLinks = document.querySelectorAll(navigation);

    const navigation = [
        'about',
        'shop',
        'featured',
        'updates'
    ];

navLinks.forEach(function(navigation)) {
    

  // add click listener for the element in this iteration of the loop
  // how can you get the "href" attribute value of the clicked element to create a string that corresponds the id of the correct section?
  // get the section by its id using the string from the last step
  // scroll to that section with .scrollIntoView()
});
 }


document.getElementById('about').scrollIntoView(behavior:'smooth')


var elem = document.querySelector('.main-carousel');
var flkty = new Flickity( elem, {
  // options
  cellAlign: 'center',
  contain: true;
  draggable: true;
  groupCells: 4;
  autoPlay:true;
});

// element argument can be a selector string
//   for an individual element
var flkty = new Flickity( '.main-carousel', {
  // options
});
