'use strict';

/*DOM MANIPULATION: DOM manipulation in javascript is the process of interacting with the DOM API 
to change or modify an HTML document that will be displayed in a web browser. 
By manipulating the DOM, we can create web applications that update the data in a web page 
without refreshing the page. The DOM stands for Document Object Model.*/

//Selecting an element in html file. for ex we want to select a paragraph:
//It is in 'message' class, so we use dot.
//If it was in an id we would use #.
//console.log(document.querySelector('.message'));

//On the element we just grabbed, we can select the text property:
// console.log(document.querySelector('.message').textContent);

//Change the text of th element:
// document.querySelector('.message').textContent = 'Correct Number!';

//Select classes 'number' and 'score':
// document.querySelector('.number').textContent = 36;
// document.querySelector('.score').textContent = 25;

//Content in the box: the html tag is 'input' : we use 'value' to get the content of input.
// document.querySelector('.guess').value = 23;

//Event: 
//Event Listener: 
//Event Handler:

//Changing the CSS properties:
//1.after name of the class we have a '.style' to specify the CSS.
//2.after .style we use '.whatever-property' we wanna manipulate.
//3.there should be a camel case for the second word if the property has two words.

let value = Math.trunc(Math.random()*20) + 1;
let score = 20;
let high_score = 0;

function display_msg(message) {document.querySelector('.message').textContent = message; }


//We want to show in the console what number the user has input:
//There are two classes that refrence the two buttons: 'btn again' and 'btn chack'. we want to manipulate the 
//'check' button and writing 'check' as the class name is enough.
//Whenever the 'click' event hapened on 'check' button, go and print the input(guess)'s value.
document.querySelector('.check').addEventListener('click' , function () {
    const guess = Number(document.querySelector('.guess').value);

    //There's no input
    if (!guess) {
        display_msg('No number enterned!');
        //OPTIMIZE Got into a function!
        //document.querySelector('.message').textContent = 'No Number Enterned!';
    } 

    //Player wins:
    else if(guess === value) {
        display_msg('Correct Number!');
        //OPTIMIZE Got into a function!
        //document.querySelector('.message').textContent = 'Correct Number!';

        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        document.querySelector('.number').textContent = value;

        //Saving the high score.
        //FIXME How to keep the highscore even when page refreshes?
        if(score > high_score) {
            high_score = score;
            document.querySelector('.highscore').textContent = high_score;
        }
    } 
    else if (guess !== value){
        //FIXME why >1 and not >0 ?
        if (score > 1) {
            display_msg(guess>value ?'Too High!' : 'Too Low!');

            document.querySelector('.guess').value = '';
            //OPTIMIZE Got into a function!
            //document.querySelector('.message').textContent = guess>value ?'Too High!' : 'Too Low!';
            
            //First u gotta change the value.
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            display_msg('You Lost the Game');
            //OPTIMIZE Got into a function!
            //document.querySelector('.message').textContent = 'You Lost the Game';
            document.querySelector('.score').textContent = 0;
        }
    }
    //OPTIMIZE Got refactoreed!
    // else if(guess > value ) {
    //     //FIXME why >1 and not >0 ?
    //     if (score > 1) {
    //         document.querySelector('.message').textContent = 'Too High!';
    //         //First u gotta change the value.
    //         score--;
    //         document.querySelector('.score').textContent = score;
    //     } else {
    //         document.querySelector('.message').textContent = 'You Lost the Game';
    //         document.querySelector('.score').textContent = 0;
    //     }
    // } 
    // else {
    //     if (score > 1) {
    //         document.querySelector('.message').textContent = 'Too Low!';
    //         //First u gotta change the value.
    //         score--;
    //         document.querySelector('.score').textContent = score;
    //     } else {
    //         document.querySelector('.message').textContent = 'You Lost the Game';
    //         document.querySelector('.score').textContent = 0;
    //     }
    //     }
    }
);


//AGAIN BUTTON:
document.querySelector('.again').addEventListener('click' , function() {

    //Reset the value(Secret number):
    value = Math.trunc(Math.random()*20) + 1;

    //Reset the score:
    // document.querySelector('.score').textContent = 20;  //FIXME NOT like this?
    score = 20;
    document.querySelector('.score').textContent = 20;  

    //Reset the background color:
    document.querySelector('body').style.backgroundColor = '#222';

    //Change the number box back to ?
    document.querySelector('.number').textContent = '?'

    //Change the number box width back to normal:
    document.querySelector('.number').style.width = '15rem';

    //Change the message to 'start guessing...'
    display_msg('Start Guessing');
    //OPTIMIZE Got into a function!
    document.querySelector('.message').textContent = 'Start Guessing...';

    //Reset the input box:
    document.querySelector('.guess').value = ''
})

