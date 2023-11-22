
function Point(x,y){
    this.x=x;
    this.y=y;
}

Point.prototype.getDistance=function(point2){
    return Math.sqrt((point2.x-this.x)*(point2.x-this.x)
     + (point2.y-this.y)*(point2.y-this.y));
};

function Circle(x,y,r){
    Point.call(this,x,y);
    this.r=r;
};

Circle.prototype=Object.create(Point.prototype);


Circle.prototype.getCircumference=function(){
    return Math.PI*2*this.r;
}

Circle.prototype.getArea=function(){
    return Math.PI*this.r*this.r;
}

Circle.prototype.intersects=function(circle2){
    return this.getDistance(circle2)<this.r+circle2.r;
}


var c1=new Circle(1,1,3);
var c2=new Circle(1,1,2);

console.log(c1.getArea());
console.log(c2.getCircumference());
console.log(c1.intersects(c2));

function Rectangle(x,y,a,b){
    Point.call(this,x,y);
    this.a=a;
    this.b=b;
}

Rectangle.prototype=Object.create(Point.prototype);

Rectangle.prototype.getPerimeter=function(){
    return 2*this.a+2*this.b;
}

Rectangle.prototype.getArea=function(){
    return this.a*this.b;
}

Rectangle.prototype.getLengthOfDiagonals=function(){
    var arrDiagonals=[];
    var diag=Math.sqrt(this.a*this.a+this.b*this.b);
    arrDiagonals[0]=diag;
    arrDiagonals[1]=diag;
    return arrDiagonals;
}

Rectangle.prototype.getBiggestCircle=function(){
    return new Circle(this.x+this.b/2,this.y+this.a/2,this.a/2);
}

function RectanglePrism(x,y,a,b,c){
    Rectangle.call(this,x,y,a,b);
    this.c=c;
}

RectanglePrism.prototype.getVolume=function(){
    return this.a*this.b*this.c;
}

var Rec=new Rectangle(1,1,1,1);
console.log(Rec.getArea());
var Rpr=new RectanglePrism(1,1,1,2,3);

console.log(Rpr.getVolume());