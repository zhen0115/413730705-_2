function setup() {  //設定初始內容，只會執行一次
  createCanvas(windowWidth, windowHeight);  //產生一個畫布
  background(0)  //黑色背景
  background("#ca9ff5")  //設定背景顏色
}

function draw() {  //畫圖，每秒畫60次
  //background(220);  //背景顏色，灰白色(0黑-255白)
  rectMode(CENTER)
  background(0)  //黑色背景
  noFill()  //以下所畫物件不要充滿顏色
  stroke("#635255")
  strokeWeight(5)
  //宣告變數
  var rect_width=50+mouseX/10
  var bc_width=50+mouseY/10
  var sc_width=50+mouseX/100
  
  //FOR迴圈
  // i=0： i為變數
  // i<20 ：條件判斷，當條件成立時，就繼續進到回圈內的程式碼執行
  // i=i+1：i值每次改變的差距值

  for(let j=0;j<20;j=j+1){

  for(let i=0;i<40;i=i+1){
    if(i<5){
      stroke("#F6CACA")
    }else if(i<10){
      stroke("#EDDEA4")
    }else{
      stroke("#9DD9D2")
    }
  ellipse(25+50*i,25+50*j,bc_width)  //在座標(x25,y25)畫一個圓
  rect(25+50*i,25+50*j,rect_width)
  ellipse(50+50*i,50+50*j,sc_width)
}
  }
}
