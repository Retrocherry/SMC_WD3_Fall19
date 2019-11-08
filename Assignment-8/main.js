function draw() {
    var ctx = document.getElementById('myCanvas').getContext('2d');
    ctx.font = '48px serif';
    ctx.textBaseline = 'hanging';
    ctx.strokeText('Hello world', 0, 100);
    
}