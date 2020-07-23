let angle = 0;
let w = 28.5;

function setup(){
    createCanvas(400, 400, WEBGL);
}

function draw(){
    background(0);
    translate(0, 25, -50)
    rotateX(PI / -8)
    // translate(width / 2, height / 2);
    rectMode(CENTER);

    //rotateX(angle * 1.1);

    let offset = 0;
    for (let x = 0; x < width; x += w){
        push();
        let a = angle + offset;
        let h = map(sin(a), -1, 1, 0, 100);
        fill(255);
        translate(x - width / 2, 0, 0);
        box(w, h, w);
        // rect(x - width / 2 + w / 2, 0, w - 2, h)
        offset += .4;
        pop();
    }


    angle += .07;
}