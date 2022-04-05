class Ball {

    constructor(x, y, r){

        var options = {
            'restitution': 0.4
        }

        this.r = r;
        this.body = Bodies.circle(x, y, this.r,options);       
        this.color = color(random(0, 255), random(0, 255), random(0, 255));
        World.add(world, this.body);
    }

    display(){

        var pos = this.body.position;
        var angle = this.body.angle;

        push();
            translate(pos.x, pos.y);
            rotate(angle);
            noStroke();
            fill(this.color)
            ellipseMode(RADIUS);
            ellipse(0, 0, this.r,this.r);
        pop();

        if(ball.body.position.y > 500){

            if(ball.body.position.x < 80 || ball.body.position.x >1280){
                score += 100;
                ball = null;
            }else if((ball.body.position.x > 80 && ball.body.position.x < 160) || (ball.body.position.x > 1200 && ball.body.position.x < 1280)){
                score += 150;
                ball = null; 
            }else if((ball.body.position.x > 160 && ball.body.position.x < 240) || (ball.body.position.x > 1120 && ball.body.position.x < 1200)){
                score += 200;
                ball = null; 
            }else if((ball.body.position.x > 240 && ball.body.position.x < 320) || (ball.body.position.x > 1040 && ball.body.position.x < 1120)){
                score += 250;
                ball = null; 
            }else if((ball.body.position.x > 320 && ball.body.position.x < 400) || (ball.body.position.x > 960 && ball.body.position.x < 1140)){
                score += 300;
                ball = null; 
            }else if((ball.body.position.x > 400 && ball.body.position.x < 480) || (ball.body.position.x > 880 && ball.body.position.x < 960)){
                score += 350;
                ball = null; 
            }else if((ball.body.position.x > 480 && ball.body.position.x < 560) || (ball.body.position.x > 800 && ball.body.position.x < 880)){
                score += 400;
                ball = null; 
            }else if((ball.body.position.x > 560 && ball.body.position.x < 640) || (ball.body.position.x > 720 && ball.body.position.x < 800)){
                score += 450;
                ball = null; 
            }else{
                score += 500;
                ball = null; 
            }
        }
    }
}