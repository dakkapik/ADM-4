const WIDTH = 600
const HEIGHT = 400

function setup() {
    frameRate(60);
    createCanvas(WIDTH, HEIGHT);
}
  
function drawStick(origin, x, y){
    let mx = origin.x + map(x,-1,1,0,100 )
    let my = origin.y + map(y,-1,1,0,100 )

    line(origin.x+50, origin.y+50, mx, my)
    circle(mx, my, 10)
}

function draw() {
    background(220);
    if(gamepad != null) {
        gamepad = navigator.getGamepads()[gpIndex]
        
        drawStick({x: 20, y:20}, gamepad.axes[0], gamepad.axes[1])
        drawStick({x: 140, y:20}, gamepad.axes[2], gamepad.axes[3])
        //A->0
        //B->1
        //X->2
        //Y->3
        //LB->4
        //RB->5
        //LT->6
        //RT->7
        //BACK->8
        //START->9
        //L-STICK->10
        //R-STICK->11
        //UP-BTN->12
        //DOWN-BTN->13
        //LEFT-BTN->14
        //RIGHT-BTN->15
        
        // console.log(gamepad.buttons[test].pressed, gamepad.buttons[test].touched, gamepad.buttons[test].value )
    }
}
  