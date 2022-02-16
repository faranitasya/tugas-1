let j;
function setup() {
  // put setup code here
  createCanvas(400,200);
  j = 0;
}

function draw() {
  // put drawing code here
  background(230,230,250);
  strokeWeight(1);
  line(180,20000,200,0);
  
  //Background
  fill(221,160,221);
  rect(0,160,400,20);
  fill(186,85,211);
  rect(0,120,400,20);
  fill(255,105,180);
  rect(0,80,400,20);
  fill(240,128,128);
  rect(0,40,400,20);
  fill(220,20,60);
  rect(0,5,400,20);

  //pou kiri
  strokeWeight();
  fill(255,0,0);
  arc(100,160,150,200,radians(180),radians(0));
  

  //mata
  strokeWeight()
  fill(255,255,255)
  ellipse(80,100,30,30)
  ellipse(120,100,30,30)

  fill(70,130,180)
  ellipse(85,100,15,15)
  ellipse(125,100,15,15)

  // pou kanan
  strokeWeight();
  fill(205,133,63);
  var y = 160+5*Math.sin(PI*j/20);
  var r = 30+1*Math.floor(PI*j/j);
  arc(300,y,150,200,radians(180),radians(0));

  //mata kiri
  fill(255,255,255)
  strokeWeight()
  var y = 100+5*Math.sin(PI*j/20);
  var r = 30+1*Math.floor(PI*j/j);
  ellipse (280,y,r,r)
  j +=1;
  
  var y = 100+5*Math.sin(PI*j/20);
  var r = 30+1*Math.floor(PI*j/j);
  ellipse(325,y,r,r)
  

  //mata kanan
  fill(70,130,180)
  var y = 100+5*Math.sin(PI*j/20);
  var r = 15+0.1*Math.floor(PI*j/j);
  ellipse(285,y,r,r)

  var y = 100+5*Math.sin(PI*j/20);
  var r = 15+0.1*Math.floor(PI*j/j);
  ellipse(330,y,r,r)


}