let allDustbins = [];
class Dustbin {
    constructor (x, y, width, height) {
        this.width = width;
        this.height = height;
        this.image = loadImage('dustbingreen.png');
        this.bottomBody = Bodies.rectangle(x, y + this.height/2 - 10, this.width, 20, {isStatic:true});
        World.add(world, this.bottomBody);
        this.rightBody = Bodies.rectangle(x + this.width/2 - 10, y - 10, 20, this.height - 20, {isStatic:true});
        World.add(world, this.rightBody);
        this.leftBody = Bodies.rectangle(x - this.width/2 + 10, y - 10, 20, this.height - 20, {isStatic:true});
        World.add(world, this.leftBody);
        this.display = function () {
            imageMode(CENTER);
            image(this.image, x, y, this.width, this.height);
        };
        allDustbins.push(this);
    }
}
function displayAllDustbins () {
    for (loop1 = 0; loop1 < allDustbins.length; loop1 += 1) {
        allDustbins[loop1].display();
    }
}
