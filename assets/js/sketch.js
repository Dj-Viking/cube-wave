let angle = 0;
let w = 30;
let ma;
let maxD;

function setup(){
    createCanvas(600, 600, WEBGL);
    ma = atan(1/sqrt(2));
    maxD = dist(0, 0, 250, 250);
}

function draw(){
    background('rgba(0, 0, 0, 0)');
    ortho(-500, 500, 500, -500, 0, 1900);
    //ambientLight(255, 0, 255, 1, -1, 10);

    //translate(0, 0, -100);
    rotateX(QUARTER_PI + 6.3);
    rotateY(ma + .15);
    rotateZ(QUARTER_PI + 2.4);
    
   

    rotateX(angle / PI);
    rotateY(angle / 2);

    //let offset = 0;
    for (let z = 0; z < height; z += w){
        for (let x = 0; x < width; x += w){
            push();
            let d = dist(x, z, width / 2, height / 2);
            let offset = map(d, 0, maxD, PI, -PI);
            let a = angle + offset;
            let h = map(sin(a), -1, 1, 10, 500);
            
            translate(x - width / 2, 0, z - height / 2);
            
            normalMaterial();
            // torus(w, h, w - 2)
            // ambientMaterial(0, 0, 255);
            // ambientLight(255);
            box(w - 2, h, w - 2);
            
            //rect(x - width / 2 + w / 2, 0, w - 2, h)
            
            pop();
            //offset += .2;
        }
        //offset += .05;
    }



    angle += .05;
}