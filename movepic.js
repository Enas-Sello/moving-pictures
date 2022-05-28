let rightImg = document.getElementById( 'right' )
let leftImg = document.getElementById( 'left' )
let topImg =  document.getElementById( 'top' )

let startBtn = document.getElementById( 'start' )
let stopBtn = document.getElementById( 'stop' )
let resetBtn = document.getElementById( 'reset' )
let movepic= document.getElementById('movepic')
stopBtn.onclick = stopMove;
startBtn.onclick = startMove;
resetBtn.onclick = resettMove;

let interval;

var move = true;
function startMove ()
{
interval = setInterval( function ()
    {
        if ( parseInt( window.getComputedStyle( document.getElementById( 'top' ) ).top ) < 5 )
        {
            move = true;
        }
        else if( parseInt ( window.getComputedStyle( document.getElementById( 'top' ) ).top ) > 210){
            move = false;
        }
        if ( move )
        {// down move
            topImg.style.top =
                parseInt( window.getComputedStyle( topImg ).top ) + 4 + "px";
            console.log(topImg.style.top)
            //left  move
                leftImg.style.left =
                parseInt( window.getComputedStyle( leftImg ).left ) + 8 + "px";
            console.log(leftImg.style.left)
            //right  move
                rightImg.style.right =
                parseInt( window.getComputedStyle(rightImg ).right ) + 8 + "px";
            console.log(rightImg.style.right)
            
        }
        else
        {// down move
            topImg.style.top =
                parseInt( window.getComputedStyle( topImg ).top ) - 4 + "px";
             //right  move
                leftImg.style.left =
                parseInt( window.getComputedStyle(leftImg ).left ) - 8 + "px";
                   //left  move
                rightImg.style.right =
                parseInt( window.getComputedStyle(rightImg ).right ) - 8 + "px";
    }

    },10)
}

function stopMove ()
{
    clearInterval(interval)
}
//reset

function resettMove ()
{
    topImg.style.top=5+"px"
    leftImg.style.left=5+"px"
    rightImg.style.right=5+"px"
    
}

