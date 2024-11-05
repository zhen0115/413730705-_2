let font;  //載入字型文字
let points = [];  //轉成點狀文字
let angle = 0
let r = 20
// ==================================================
function preload(){  //在執行setup()前，必須先做此函數執行，主要先載入字型
    //為載入在fonts資料夾內的NotoSansTC-VariableFont_wght.ttf字型
    font = loadFont("fonts/NotoSansTC-VariableFont_wght.ttf") 
}
//===================================================








function setup() {
  createCanvas(windowWidth, windowHeight,);  //設定畫布寬高
  angleMode(DEGREES) //
  background("#003566")  //設定背景顏色
  points = font.textToPoints("TKU", -300, 80, 200, {
    sampleFactor:0.1
  }); //轉成文字圖檔，放在(0, 200)位置，圖形大小為200，sampleFactor為點數距離大小 值愈小點數愈少

}

function draw() {  //畫圖，每秒會進入執行程式60次
    
background("#f1e4f3");
rectMode(CENTER)

//background(0)  //黑色背景
noFill()  //以下所畫物件不要充滿顏色
stroke("#635255")
strokeWeight(5)
//宣告變數
var rect_width=50+mouseX/10
var bc_width=50+mouseY/10
var sc_width=25+mouseX/100

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

   // textSize(30)
    //text(mouseX+":"+mouseY,width/2,height/2)
   
    translate(width/2,height/2)  //把原本原點(00)
    rotate((frameCount%360))  //依照frameCount除以360求餘數
    for (let i=0; i<points.length-1; i++) { 
     //text(str(i),points[i].x,points[i].y,)  //在()座標上顯示一個文字(數字)
     //fill("#87bcde")  //畫圓的充滿顏色
     //noStroke()  //畫圓的框線粗細
     stroke("#003566")  //線條顏色
     strokeWeight(3)  //線條粗細
     //ellipse(points[i].x+r*sin(angle+i*15),points[i].y,10)
     line(points[i].x+r*sin(angle+i*10),points[i].y+r*sin(angle+i*10),points[i+1].x,points[i+1].y)  //畫線，兩點構成一線
   
    }
}

