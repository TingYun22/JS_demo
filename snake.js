// unit size of the background
let snakeCount=20;
let canvas=document.querySelector('#board');
canvas.height=Math.pow(snakeCount,2);
canvas.width=Math.pow(snakeCount,2);
const ctx=canvas.getContext('2d');

// snakeBody
let snakeSize=canvas.width / snakeCount -2;
const snakeParts=[];
let tailLength=2;

let speed=7;

// snake position
let headX=Math.floor(Math.random()*snakeCount);
let headY=Math.floor(Math.random()*snakeCount);

let xVelocity=0;
let yVelocity=0;

// food position
let appleX=Math.floor(Math.random()*snakeCount);
let appleY=Math.floor(Math.random()*snakeCount);

let score=0;

const newDiv=document.createElement('div');
const divText=document.createTextNode('RESTART');


function drawGame(){
    changeSnakePosition();
    let result=isGameOver();
    if(result){
        return;
    }

    clearScreen();
    cheackAppleCollection();
    drawSnake();
    drawApple();

    drawScore();

    setTimeout(drawGame,1000/speed);
}
function isGameOver(){
    let gameOver=false;
    // init
    if(xVelocity===0 && yVelocity===0){
        return false;
    }
    // walls
    if(headX < 0){
        gameOver=true;
    }else if(headX === snakeCount){
        gameOver=true;
    }else if(headY < 0){
        gameOver=true;
    }else if(headY === snakeCount){
        gameOver=true;
    }
    // eat myself
    for(let i =0; i<snakeParts.length;i++){
        let partX=snakeParts[i][0];
        let partY=snakeParts[i][1];
        if(partX == headX  && partY == headY){
            gameOver=true;
            break;
        }
    }

    if(gameOver){
        ctx.fillStyle='white';
        ctx.font='48px Verdana';
        
        const gradient=ctx.createLinearGradient(0,0,canvas.width, 0);
        gradient.addColorStop('0','orange');
        gradient.addColorStop('0.5','purple');
        gradient.addColorStop('1.0','red');
        ctx.fillStyle=gradient;

        ctx.fillText('Game Over!',canvas.width / 6 , canvas.height / 2);
        
        newDiv.appendChild(divText);
        document.body.insertBefore(newDiv,canvas);
        newDiv.className='restart';
        newDiv.style.position='absolute';
        newDiv.style.zIndex='3';
        newDiv.addEventListener('click',restartGame)
        
    }

    return gameOver;
}

function restartGame(){
    location.reload();
}

function drawScore(){
    ctx.fillStyle='white';
    ctx.font='13px Verdana';
    ctx.fillText('Score '+ score, canvas.width-85, 20);
}

function drawSnake(){
    ctx.fillStyle='greenyellow';
    for(let i = 0 ; i < snakeParts.length ; i++){
        let partX=snakeParts[i][0];
        let partY=snakeParts[i][1];
                
        ctx.fillRect(partX * snakeCount, partY * snakeCount, snakeSize,snakeSize);
       
    }
    snakeParts.push([headX, headY]);
    while(snakeParts.length > tailLength){
        snakeParts.shift();
    }

    ctx.fillStyle='orange';
    ctx.fillRect(headX * snakeCount, headY * snakeCount, snakeSize,snakeSize);
}

function changeSnakePosition(){
    headX = headX + xVelocity;
    headY = headY + yVelocity;
}


function clearScreen(){
    ctx.fillStyle='black';
    ctx.fillRect(0,0,canvas.height,canvas.width)
}

function drawApple(){
    ctx.fillStyle='red';
    ctx.fillRect(appleX * snakeCount, appleY * snakeCount, snakeSize,snakeSize)
}

function cheackAppleCollection(){
    if(appleX === headX && appleY === headY){
        appleX = Math.floor(Math.random() * snakeCount);
        appleY = Math.floor(Math.random() * snakeCount);
        tailLength++;
        score++;
        if(speed < 16){
            speed++;
        }
    }
    
}

document.body.addEventListener('keydown',keyDown);

function keyDown(e){
    if(e.keyCode==38){
        if(yVelocity==1) return
        yVelocity=-1;
        xVelocity=0;
    }else if(e.keyCode==40){
        if(yVelocity==-1) return
        yVelocity=1;
        xVelocity=0;
    }else if(e.keyCode==37){
        if(xVelocity==1) return
        yVelocity=0;
        xVelocity=-1;
    }else if(e.keyCode==39){
        if(xVelocity==-1) return;
        yVelocity=0;
        xVelocity=1;
    }
}

drawGame();