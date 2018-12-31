var colors = [
    "rgb(" + (Math.random()*256) + ', ' 
        + (Math.random()*256) + ', ' 
        + (Math.random()*256) + ')',
        "rgb(" + (Math.random()*256) + ', ' 
        + (Math.random()*256) + ', ' 
        + (Math.random()*256) + ')',
        "rgb(" + (Math.random()*256) + ', ' 
        + (Math.random()*256) + ', ' 
        + (Math.random()*256) + ')',
        "rgb(" + (Math.random()*256) + ', ' 
        + (Math.random()*256) + ', ' 
        + (Math.random()*256) + ')',
        "rgb(" + (Math.random()*256) + ', ' 
        + (Math.random()*256) + ', ' 
        + (Math.random()*256) + ')',
        "rgb(" + (Math.random()*256) + ', ' 
        + (Math.random()*256) + ', ' 
        + (Math.random()*256) + ')',
];

var squares = document.querySelectorAll('.square');
for (let i = 0; i < squares.length; i++){
    squares[i].style.backgroundColor = colors[i];
}