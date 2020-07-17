let allLaunchers = [];

class Launcher {
    constructor(Object, Point) {
        this.chain = Constraint.create({
            'bodyA' : Object.body,
            'pointB' : Point,
            'stiffness' : 0.004,
            'length' : 50
        });
        World.add(world, this.chain);
        this.flown = false;
        allLaunchers.push(this);
    }
    display() {
        if (!this.flown) {
            line(this.chain.bodyA.position.x, this.chain.bodyA.position.y, this.chain.pointB.x, this.chain.pointB.y);
        }
    }
    fly() {
        this.flown = true;
        this.chain.bodyA = null;
    }
}

function displayAllLaunchers () {
    for (loop1 = 0; loop1 < allLaunchers.length; loop1 += 1) {
        allLaunchers[loop1].display();
    }
}