var allPapers = [], loop1;
class Paper {
    constructor (x, y, radius) {
        this.radius = radius;
        this.image = loadImage('paper.png');
        this.body = Bodies.circle(x, y, this.radius * 2/3, {isStatic: false, restitution: 0.3, friction: 0.5, density: 1.2});
        this.canDrag = true;
        World.add(world, this.body);
        this.launch = function() {
            Matter.Body.applyForce(this.body, this.body.position, {x: 25, y: -55});
        }
        this.display = function () {
            imageMode(CENTER);
            image(this.image, this.body.position.x, this.body.position.y, this.radius * 2, this.radius * 2);
        };
        allPapers.push(this);
    }
}
function displayAllPapers () {
    for (loop1 = 0; loop1 < allPapers.length; loop1 += 1) {
        allPapers[loop1].display();
    }
}
