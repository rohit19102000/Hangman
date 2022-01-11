const wordEl = document.getElementById('word');
const wrongLettersEl = document.getElementById('wrong-letters');
const playAgainbtn = document.getElementById('play-again');
const popup = document.getElementById('popup-container');
const notification = document.getElementById('notification-container');
const finalMessage = document.getElementById('final-message');

const figureParts = document.querySelectorAll('.figure-parts');

const words = ['application','programing','interface','wizard'];
let selectedWord = words[Math.floor(Math.random() * words.length)];


const correctLetters = [];
const wrongLetters = [];


function displayWord(){
    wordEl.innerHTML = `
    ${selectedWord
        .split('')
        .map(letter =>`<span class="letter">${correctLetters.includes(letter) ? letter :''}</span>`).join('')}            
    `;
    const innerWord = wordEl.innerText.replace(/\n/g,'' );

    if (innerWord === selectedWord){
        finalMessage.innerText = ' congratulations! you won ';
        popup.style.display = 'flex'; 
    }
}
// Update the wrong wrong letters 
function updateWrongLettersEl(){
    console.log('updateWrong');

}
// show notification
function showNotification(){
    notification.classList.add('show');
    setTimeout(()=>{
        notification.classList.remove('show');
    },2000)
}


//  keydown letter press
window.addEventListener( 'keydown',e =>{
    // console.log(e.keydown);
    if(e.keyCode >= 65 && e.keyCode <= 90){
        console.log(123);
        const letter = e.key;
        if(selectedWord.includes(letter)){
            if(!correctLetters.includes(letter)){
                correctLetters.push(letter);

                displayWord();

            }else{
                showNotification();
            }
        }else{
            if(!wrongLetters.includes(letter)){
                wrongLetters.push(letter);
                updateWrongLettersEl();

            }else{
                showNotification();
            }
        }
    }
})
displayWord();


