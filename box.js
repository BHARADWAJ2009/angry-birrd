class Box{
constructor(x,y,width,hweight){
    var options={
     restution:0.5,
     friction:3,
     density:3
}
this.body = Bodies.rectangle(x,y,width,height,options);
this.width = width;
this.height = height
World.add|(world,this.body)
}
display(){
 var pos = this.body.position 
 var angle = this.body.angle
 rectMode(CENTER);
 rect(0,0,this.width,thgis.height)

}






}