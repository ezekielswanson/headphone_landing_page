
const lightbox = document.createElement('div');
//Doing this so it's easy to select in css
lightbox.id = "lightbox";
document.getElementsByClassName('section-three').appendChild(lightbox);



const img = document.getElementsByClassName('light-box');

img.forEach(image => {
    img.addEventListner('click', (e) => {
        /*Everytime you click on image with class active class
        to it to enable the lightbox styling
        */
        lightbox.classList.add('active');


    });



});