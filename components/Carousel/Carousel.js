/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

let carouselContainer = document.querySelector('.carousel-container');

function carouselCreator(){
  let carDiv = document.createElement('div');
  carDiv.classList.add('carousel');

  let leftButton = document.createElement('div');
  leftButton.classList.add('left-button');
  leftButton.textContent = "<";
  leftButton.addEventListener('click', leftClick)
  leftButton.style.zIndex = "99";
  

  let img1 = document.createElement('img');
  let img2 = document.createElement('img');
  let img3 = document.createElement('img');
  let img4 = document.createElement('img');

  img1.src = "./assets/carousel/mountains.jpeg";
  img2.src = "./assets/carousel/computer.jpeg";
  img3.src = "./assets/carousel/trees.jpeg";
  img4.src = "./assets/carousel/turntable.jpeg";


  let rightButton = document.createElement('div');
  rightButton.classList.add('right-button');
  rightButton.textContent = ">";
  rightButton.addEventListener('click', rightClick);

  carDiv.appendChild(leftButton)
  carDiv.appendChild(img1)
  carDiv.appendChild(img2)
  carDiv.appendChild(img3)
  carDiv.appendChild(img4)
  carDiv.appendChild(rightButton);

  

  carouselContainer.appendChild(carDiv);
}

carouselCreator();

let currentImage = 0;


let leftBtn = document.querySelector('.left-button');
let rightBtn = document.querySelector('.right-button');


function leftEvent(){
  leftBtn.addEventListener('click', leftClick);
}

function rightEvent(){
  rightBtn.addEventListener('click', rightClick);
}

function leftClick(){

  leftBtn.removeEventListener('click', leftClick);
  setTimeout(leftEvent, 1000);
  
  let slideOut = allImages[currentImage];

  

  if(currentImage > 0){
    currentImage--;
  } else{
    currentImage = allImages.length-1;
  }

  let slideIn = allImages[currentImage];

  
   //Start off to the right side
   TweenMax.to(slideIn, 0, { transform: "translate(100%)", position: "absolute", animationTimingFunction: "linear", ease: "linear", transitionTimingFunction: "linear"  });

   //Move current image to the left off screen
   TweenMax.to(slideOut, 1, {transform: "translate(-100%)", transitionTimingFunction: "linear", animationTimingFunction: "linear", ease: "linear"  });
   
   //Move standyby image into the screen
   TweenMax.to(slideIn, 1, {position: "absolute", display:"block", transform: "translate(0%)", transitionTimingFunction: "linear", animationTimingFunction: "linear", ease: "linear"   });
   
  
}

function rightClick(){

  rightBtn.removeEventListener('click', rightClick);
  setTimeout(rightEvent, 1000);

  let slideOut = allImages[currentImage];
  
  if(currentImage<allImages.length-1){
    currentImage++;
  } else{
    currentImage=0;
  }

  let slideIn = allImages[currentImage];

    //Start off to the LEFT side
    TweenMax.to(slideIn, 0, { transform: "translate(-100%)"});

    //Move standyby image into the screen
    TweenMax.to(slideIn, 1, {transform: "translate(0%)", transitionTimingFunction: "linear", ease: "linear"   });
  
    //Move current image to the RIGHT off screen
    TweenMax.to(slideOut, 1, {transform: "translate(100%)", transitionTimingFunction: "linear", animationTimingFunction: "linear", ease: "linear"  });
}



let allImages = document.querySelectorAll('.carousel img');

allImages.forEach((image,index)=>{
  TweenMax.to(image, 0, {position: "absolute", display:"block",transform: "translate(-100%)"}); 
  if(index===0){
    TweenMax.to(image, 0, {transform: "translate(0%)"}); 
  }
})