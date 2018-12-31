var colors = [];
const squares = document.querySelectorAll('.square');
var pickedColor;
const colorDisplay = document.getElementById('colorDisplay');
const messageSpan = document.getElementById('message');
//select the rgb display span and pick a color to be the winning color
//add colors to array based on how many squares
newColors();




//loop through squares to assign colors and handlers
for (let i = 0; i < squares.length; i++){
    //add initial colors
    squares[i].style.backgroundColor = colors[i];
    //add handlers
    squares[i].addEventListener('click', () => {
        if(pickedColor === squares[i].style.backgroundColor){
            messageSpan.textContent = 'Correct!'
            //set all square colors to winning color
            for (let j = 0; j < squares.length; j++){
                squares[j].style.backgroundColor = squares[i].style.backgroundColor;
            }
        }else{
            squares[i].style.backgroundColor = "#232323";
            messageSpan.textContent = 'Try Again'
        }
    });
}
function newColors(){
    for (let i = 0; i < squares.length; i++){
        colors.push("rgb(" + Math.floor(Math.random()*256) + ', ' 
            + Math.floor(Math.random()*256) + ', ' 
            + Math.floor(Math.random()*256) + ')');
    }
    pickedColor = colors[Math.floor(Math.random()*colors.length)];
    colorDisplay.textContent = pickedColor;
}