const mole = document.querySelectorAll('.hungryMoleImg')

let value = Math.floor(Math.random()*10)+1 ;
let arr = mole
let image = arr[value]

image.src="img/king-mole-hungry.png"


let delay=0;
randomInterval=Math.floor(Math.random() * 5000)+1000;

timeLeft = function(){
    if (randomInterval <= 1000){
        timeLeft= 500
    }else {
        timeLeft= 1000
    }
}

setInterval(function () {
    delay++
    
    mole.forEach(moleImg => {
        if (delay%2 === 0){
            
            // setTimeout(function () {
            //     moleImg.classList.add('hide');
            //     moleImg.classList.remove('show');
            // }, timeLeft);

            moleImg.classList.add('hide');
            moleImg.classList.remove('show');  
                
        }else{
            moleImg.classList.remove('hide');
            moleImg.classList.add('show');

        }

    });
   
}, randomInterval)


var score =0;
var counter =0


function  addPoint() { 
    mole.forEach(moleImg => {moleImg.addEventListener("click",function(){

        const worm = document.querySelector('.worm')
        let part = moleImg.src.slice(22, )

        if (part === "img/king-mole-hungry.png" ){

            score = score+ 2;

            counter= counter + 2;
        }else{
            score++
        }

        counter++
        worm.style.display="block";
        worm.style.width= (counter * 10)+ '%'
        
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
    
    }) 
 })
}
      
addPoint()




// clearInterval(myInterval);

