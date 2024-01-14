let dirVec;
class Vehicle {
    constructor(x, y) {
        this.pos = createVector(x, y);
        this.vel = createVector(0, 0);
        this.acc = createVector(0, 0);
        this.maxSpeed = 50;
        this.maxForce = 50;
        this.r = 16;
    }

    seek(target) {
        var force_slider = document.getElementById("force");
        var speed_slider = document.getElementById("speed");
        let force = p5.Vector.sub(target, this.pos);
        force.setMag(floor(speed_slider.value));
        force.sub(this.vel);
        force.limit(floor(force_slider.value) / 10);
        this.applyForce(force);
        console.log(speed_slider.value);
        console.log(force_slider.value);
        document.getElementById("force_val").innerHTML = floor(force_slider.value);
        document.getElementById("speed_val").innerHTML = floor(speed_slider.value);
    }

    applyForce(force) {
        this.acc.add(force);
    }

    update() {
        this.vel.add(this.acc);
        this.vel.limit(this.maxSpeed);
        this.pos.add(this.vel);
        this.acc.set(0, 0);
    }

    show() {
        stroke(255, 0, 0);
        strokeWeight(2);
        fill(255);
        push();
        translate(this.pos.x, this.pos.y);
        rotate(this.vel.heading());
        strokeWeight(2);
        image(cat, this.r - 50, -50, 100, 100);
        line(0, 0, 10 * document.getElementById("speed").value, 0);
        line(10 * document.getElementById("speed").value, 0, 10 * document.getElementById("speed").value - 6, -6);
        line(10 * document.getElementById("speed").value, 0, 10 * document.getElementById("speed").value - 6, +6);
        pop();
    }

    edges() {
        if (this.pos.x > width + this.r) {
            this.pos.x = -this.r;
        } else if (this.pos.x < -this.r) {
            this.pos.x = width + this.r;
        }
        if (this.pos.y > height + this.r) {
            this.pos.y = -this.r;
        } else if (this.pos.y < -this.r) {
            this.pos.y = height + this.r;
        }
    }
}
