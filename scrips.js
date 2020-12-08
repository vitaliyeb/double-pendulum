
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
    a1_v = 0,
    a2_v = 0,
    a1_a = 0, 
    a2_a = 0,
    g = 1;



function draw() {
    let x1 = l1 * sin(a1),
        y1 = l1 * cos(a1),
        a1_a = (-g * (2 * m1 + m2) * sin(a1) - m2 * g * sin(a1 - 2 * a2) - 2 * sin(a1 - a2) * m2 * (a2_v * a2_v * l2 +  a1_v * a1_v * l1 * cos(a1 - a2))) / (l1 * (2 * m1 + m2 - m2 * cos(2 * a1 - 2 * a2))),
        a2_a = (2 * sin(a1 - a2) * (a1_v * a1_v * l1 * (m1 + m2) + g * (m1 + m2) * cos(a1) + a2_v * a2_v * l2 * m2 * cos(a1 - a2))) / (l2 * (2 * m1 + m2 - m2 * cos(2 * a1 - 2 * a2)));




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
    
    a1_v += a1_a;
    a2_v += a2_a;
    a1 += a1_v;
    a2 += a2_v;
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


