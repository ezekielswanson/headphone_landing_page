
const lightbox = document.createElement('div');
//Doing this so it's easy to select in css
lightbox.id = "lightbox";
document.body.appendChild(lightbox);



const img = document.getElementsByClassName('active');
img.forEach(image => {
    a.addEventListner('click', (e) => {
        /*Everytime you click on image with class of big you act active class
        to it to enable the lightbox styling
        */
        lightbox.classList.add('active');


    });



});