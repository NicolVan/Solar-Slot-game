const image1 = document.getElementById("im1");
const image2 = document.getElementById("im2");
const image3 = document.getElementById("im3");
const image4 = document.getElementById("im4");
const image5 = document.getElementById("im5");
const image6 = document.getElementById("im6");
const image7 = document.getElementById("im7");
const button = document.getElementById("btm");
const text = document.getElementById("text");
lives = 5;
var img1 = 1;
var img2 = 1;
var img3 = 1;
var img4 = 1;
var img5 = 1;
var img4 = 1;
var img5 = 1;
var img6 = 1;
var img7 = 1;

function spins(){
    
    text.innerText = `You have ${lives}`;
    if(lives < 1 ){

       text.innerHTML = 'You lose';
        lives = 5;
        var img1 = 1;
        var img2 = 1;
        var img3 = 1;
        var img4 = 1;
        var img5 = 1;
        var img4 = 1;
        var img5 = 1;
        var img6 = 1;
        var img7 = 1;
        return;
    }
    if(image1 == image2 && image2 == image3 && image3 == image4 &&  image4 == image5 && image5 == image6 && image6 == image7){
        text.innerHTML = 'You win';
    }

    img1=randomImg(1,7);
    img2=randomImg(1,7);
    img3=randomImg(1,7);
    img4=randomImg(1,7);
    img5=randomImg(1,7);
    img6=randomImg(1,7);
    img7=randomImg(1,7);

   
    image1.src=`sl${img1}.jpg`;
    image2.src=`sl${img2}.jpg`;
    image3.src=`sl${img3}.jpg`;
    image4.src=`sl${img4}.jpg`;
    image5.src=`sl${img5}.jpg`;
    image6.src=`sl${img6}.jpg`;
    image7.src=`sl${img7}.jpg`;
    lives--;

    
}


function randomImg(floor,ceilling){
  return  Math.floor(Math.random() * ceilling) + floor;
  console.log(imgRan);
    
}

