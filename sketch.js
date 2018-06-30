//var symbol;
var streams = [];;
var symbolSize = 26;
function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  

  
  //symbol = new Symbol(width/2,0,random(5,10));
  //symbol.setSymbol();
  background(0);
  //stream = new Stream();
  //stream.generateSymbols();
  var x = 0;
  for(var i = 0;i <= width/symbolSize ;i++){
    stream = new Stream();
    stream.generateSymbols(x,random(-1000,0));
    streams.push(stream);
    x += symbolSize;
  }
  textSize(symbolSize);
}


function draw(){
  background(0,0,0,150);
  //symbol.render();
  
  streams.forEach(function(stream){
   stream.render();
  });

}

function Symbol(x,y,speed,first){
  this.x = x;
  this.y = y;
  this.value;
  this.speed = speed;
  this.switchInterval = round(random(2,20));
  this.first = first;

  this.setSymbol = function(){
    if(frameCount % this.switchInterval == 0){
      this.value = String.fromCharCode(0x30A0 + round(random(0,96)))
    }
   
  };

  //this.render = function(){
    
  //}

  this.rain = function(){
    
    this.y = (this.y >= height) ? this.y = 0 : this.y += this.speed;
     
  };
}



function Stream(){
  this.symbols = [];
  this.totalSymbols = round(random(5,30));
  this.speed = random(5,20);

  this.generateSymbols = function(x,y){
    var first = round(random(0,4)) == 1;
    for(var i = 0;i<=this.totalSymbols;i++){
      symbol = new Symbol(x,y,this.speed,first);
      symbol.setSymbol();
      this.symbols.push(symbol);
      y -= symbolSize;
      first = false;
    }
  }

  this.render = function(){

    this.symbols.forEach(function(symbol){
      if(symbol.first){
        fill(180,255,180)
        //fill(0,0,0)
      }else{
        fill(0,255,70);
      }

      text(symbol.value,symbol.x,symbol.y);
      symbol.rain();
      symbol.setSymbol();
    });
  }
}
