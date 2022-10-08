const canvas =document.getElementById("canvas");
const increaseBtn =document.getElementById("increase");
const  decreaseBtn=document.getElementById("decrease");
const  sizeEl=document.getElementById("size");
const ctx = canvas.getContext('2d');


ctx.clearRect(0,0,800,800)

let size =20;

let isPressed =false;

canvas.addEventListener('mousedown', (e) =>{
 isPressed = true;
})

canvas.addEventListener('mouseup', (e) =>{ 
 isPressed= false;
})

canvas.addEventListener('mousemove', (e) =>{
    if (isPressed){
        const x = e.offsetX;
        const y = e.offsetY;

        drawCircle(x,y);
    }
});



function drawCircle(x,y){
    ctx.beginPath()
    ctx.arc(x,y,size,0,Math.PI * 2);
    ctx.closePath();
    ctx.fill();
}

increaseBtn.addEventListener('click', ()=>{
    size += 5;

    if(size > 50){
        size = 50;
    }
});

decreaseBtn.addEventListener('click', () =>{
    size += 5;

    if(size < 50){
        size = 50;
    }
});


