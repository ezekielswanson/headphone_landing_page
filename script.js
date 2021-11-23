const texts = ["Day", "Work", "Life"];

//Create a counter that goes through each word one by one 
//And then loop through each index of the word

let count = 0;
let index = 0;
//Grabbing the actual words and putting it into the var currentText 
let currentText = '';
let letter = '';

(function type() {
    if(count === texts.lenght) {
        count = 0;
    }

    currentText = texts[count];
    letter = currentText.slice(0,index++);
    letter = document.querySelector('.typing').textContent
        if (letter.length === currentText.length) {
            count++;
            index = 0;
        }
        
        setTimeout(type, 400);

}());

//Extra parenetheeses allows you to call the function immediately 