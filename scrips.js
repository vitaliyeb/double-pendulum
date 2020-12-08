
let canvas = document.getElementById('canvas'),
    ctx = canvas.getContext('2d'),
    width = window.innerWidth,
    height = window.innerHeight;

canvas.width = width;
canvas.height = height;

let l1 = 100,
    l2 = 100,
    pi = Math.PI,
    m1 = 10,
    m2 = 10,
    a1 = pi / 4,
    a2 = pi / 8,
    cos = Math.cos,
    sin = Math.sin,
    av_1 = 0,
    av_2 = 0;



function draw() {
    let x1 = l1 * sin(a1),
        y1 = l1 * cos(a1);

        ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(x1, y1);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(x1, y1, m1, 0, pi * 2);
    ctx.fill();
    

    let x2 = x1 + l2 * sin(a2),
        y2 = y1 + l2 * cos(a2);
    
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(x2, y2, m2, 0, pi * 2);
    ctx.fill();  
    
    a1+= 0.1;
    a2+= 0.2;
}

function reDraw(){
    ctx.save();
    ctx.clearRect(0, 0, width, height);
    ctx.translate(width / 2, height / 2);
    draw();
    ctx.restore();
    requestAnimationFrame(reDraw);
}

requestAnimationFrame(reDraw);


