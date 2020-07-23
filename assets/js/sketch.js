let angle = 0;
let w = 28.5;
let ma

function setup(){
    createCanvas(500, 600, WEBGL);
    ma = atan(1/sqrt(2))
}

function draw(){
    background(100);
    ortho(-500, 500, 500, -500, 0, 1900);
    //ambientLight(255, 0, 255, 1, -1, 10);

    // translate(0, 0, -100);
    rotateX(QUARTER_PI);
    rotateY(ma)
    
   

    //rotateX(angle / 20);

    let offset = 0;
    for (let z = 0; z < height; z += w){
        for (let x = 0; x < width; x += w){
            push();
            let a = angle + offset;
            let h = map(sin(a), -1, 1, 0, 100);
            
            translate(x - width / 2, 0, z - height / 2);
            normalMaterial();
            box(w - 2, h, w - 2);
            //rect(x - width / 2 + w / 2, 0, w - 2, h)
            
            pop();
            offset += .01;
        }
        // offset += .05;
    }



    angle += .05;
}