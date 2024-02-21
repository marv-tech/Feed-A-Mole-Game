const mole = document.querySelectorAll('.hungryMoleImg')

const moleHoles = document.querySelectorAll('.hole')

// Make one of the moles a king mole
let value = Math.floor(Math.random()*10)+1 ;

let arr = Array.from(mole);

mole.forEach(moleImg => {
    moleImg.classList.add('hide');
    moleImg.classList.remove('show');  
    })  

// Function to generate random time (in milliseconds)
function getRandomTime(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// function move (){
//     var kingCounter =0;    
//     const arrObjects = []

//     for (const image of arr) {
//         const randomTime = getRandomTime(1000, 10000)
        
//         setInterval(function(){
//             kingCounter++;

//             if(kingCounter%7 === 0){
//                 image.src="img/king-mole-hungry.png";
//             }

//             image.classList.remove('hide');
//             image.classList.add('show');

//             setTimeout(() => {
//                 image.classList.remove('show');
//                 image.classList.add('hide');
//             }, 2000);
//         }, randomTime)
//     }
                          
// }



var score =0;
var counter =0
click = false;

function  addPoint() { 

    mole.forEach(moleImg => {moleImg.addEventListener("click",function(){

        
        const worm = document.querySelector('.worm')
        let part = moleImg.src.slice(22, )

        if (part === "img/king-mole-hungry.png" ){
            click = true;
            score = score+ 1;

            counter= counter + 1;

            moleImg.src ="img/king-mole-fed.png"

            console.log(counter)
            if (click){
                image.src="img/mole-leaving.png"
                image.classList.remove('hide');
                image.classList.add('show');       
            }

        }else{
            score++
            moleImg.src ="img/mole-fed.png" 
        }

        counter++
        worm.style.display="block";
        worm.style.width= (counter * 10)+ '%';


        if (counter > 9 && counter < 11){

            const mainPage = document.querySelector('#mainPage')

            mainPage.style.display="none";

            const winImageDiv = document.createElement('div');

            const winImage = document.createElement('img');

            winImage.classList.add('winStyle');

            winImage.src = "img/win.png"
            const body = document.querySelector('#pageBody');

            body.appendChild(winImageDiv);
            winImageDiv.appendChild(winImage);

        }

        
    })})

    

   
}
      
addPoint()



