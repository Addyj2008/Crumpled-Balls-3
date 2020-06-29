var allGrounds = [];
class Ground {
    constructor (x, y, width, height) {
        this.width = width;
        this.height = height;
        this.body = Bodies.rectangle(x, y, this.width, this.height, {isStatic:true});
        Worlds.add(world, this.body);
        this.display = function () {
            push();
            strokeWeight(0);
            translate(this.body.position.x, this.body.position.y);
            fill(139,69,19);
            rectMode(CENTER);
            rect(0, 0, this.width, this.height);
            pop();
        };
        allGrounds.push(this);
    }
}
function displayAllGrounds () {
    for (i = 0; i < allGrounds.length; i++) {
        allGrounds[i].display();
    }
}