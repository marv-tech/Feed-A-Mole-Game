const mole = document.querySelectorAll('.hungryMoleImg')


let delay=0;
randomInterval=Math.floor(Math.random() * 5000)+1000;

setInterval(function () {
    delay++
    mole.forEach(moleImg => {
        if (delay%2 === 0){
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
        score++
        counter++ 

        const worm = document.querySelector('.worm')
        worm.style.display="block"
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

