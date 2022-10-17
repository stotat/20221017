function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);
  noFill()//不充滿顏色
  stroke(225)//框線顏色為白色
for(var j=0;j<height/50;j++)
 {
   for(var i=0;i<width/50;i++)
   {
  ellipse(25+50*i,25+50*j,50)
  rect(0+50*i,0+50*j,50)
  ellipse(50+50*i,50+50*j,25)
   }
}
}



  // rectMode(CENTER)
  // ellipse(25+50*0,25,50)// 座標(??,??)產生一個直徑50的圓
  // rect(25+50*0,25,50)
  // ellipse(50+50*0,50,25)

  // ellipse(25+50*1,25,50)// 座標(??,??)產生一個直徑50的圓
  // rect(25+50*1,25,50)
  // ellipse(50+50*1,50,25)

  // ellipse(25+50*2,25,50)// 座標(??,??)產生一個直徑50的圓
  // rect(25+50*2,25,50)
  // ellipse(50+50*2,50,25)

  // ellipse(25+50*3,25,50)// 座標(??,??)產生一個直徑50的圓
  // rect(25+50*3,25,50)
  // ellipse(50+50*3,50,25)

  // ellipse(25+50*4,25,50)// 座標(??,??)產生一個直徑50的圓
  // rect(25+50*4,25,50)
  // ellipse(50+50*4,50,25)

  // ellipse(25+50*5,25,50)// 座標(??,??)產生一個直徑50的圓
  // rect(25+50*5,25,50)
  // ellipse(50+50*5,50,25)

  // ellipse(25+50*6,25,50)// 座標(??,??)產生一個直徑50的圓
  // rect(25+50*6,25,50)
  // ellipse(50+50*6,50,25)