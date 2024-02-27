const mole = document.querySelectorAll('.hungryMoleImg');
const hungry = "img/mole-hungry.png";
const sad = "img/mole-sad.png";
const fed = "img/mole-fed.png";
const leave = "img/mole-leaving.png";
const hungryKing = "img/king-mole-hungry.png"
const sadKing ="img/king-mole-sad.png"
const leaveKing ="img/king-mole-leaving.png"
const fedKing ="img/king-mole-fed.png"
let counter = 0;

// Function to generate random time (in milliseconds) within a range
function getRandomTime(min, max) {
    if (min > max) {
        [min, max] = [max, min]; // Swap min and max if min is greater
    }
    return Math.floor(Math.random() * (max - min + 1) + min);
}


// Function to simulate changing images 
function changeImage(img, src) {
img.src = src;
}
// Function to handle click event on mole
function clickHandler() { 
    const moleImg = this;

    let part = moleImg.src.slice(moleImg.src.lastIndexOf('/') + 1);

    if ((part === "mole-hungry.png" || part === "king-mole-hungry.png") && part !== "king-mole-leaving.png") {
        if (part === "king-mole-hungry.png") {
            counter += 2; // Double the point for a king mole
            console.log("king", counter)
            moleImg.src = fedKing; // Change to fed king image
        } else {
            counter++;
            console.log(counter)
            moleImg.src = fed; // Change to fed image
        }
        setTimeout(() => {
            if (part === "king-mole-hungry.png") {
                moleImg.src = leaveKing; // Change to leaving king image
            } else {
                moleImg.src = leave; // Change to leaving image
            }
        }, getRandomTime(1000, 3000));
    }

    const worm = document.querySelector('.worm-container');
    worm.style.display = "block";
    worm.style.width = (counter * 10) + '%';

    // Need to fix this
    worm.addEventListener("change", function(){
        document.getElementById('#feedAudio').play();
        console.log("sounddd")

    })
  

    if (counter > 4 && counter <= 6) {

        const mainPage = document.querySelector('#mainPage');
        mainPage.style.display = "none";
        const winImageDiv = document.createElement('div');
        const winImage = document.createElement('img');
        const winDivText = document.createElement('div');
        const winBtnDiv = document.createElement('div');
        const body = document.querySelector('#pageBody');

        // create a win text elemet and its content
        const winText = document.createElement('p');
        winText.textContent="You Won & i'm so full!"
        winText.classList.add('winTextStyle');

        winBtnDiv.classList.add("winBtnDivStyle");

        // create replay button
        const replayBtn = document.createElement('button');
        replayBtn.textContent = "Click to replay";
        replayBtn.classList.add("winBtn");

        // Add event listener to replay button to navigate to game.html
        replayBtn.addEventListener("click", function() {
            window.location.href = "game.html"; // Redirect to game.html
        });


        // create back to welcome page button
        const wlcBckBtn = document.createElement('button');
        wlcBckBtn.textContent = "Back to home";
        wlcBckBtn.classList.add("bckBtn");

        // Add event listener to replay button to navigate to game.html
        wlcBckBtn.addEventListener("click", function() {
            window.location.href = "index.html"; // Redirect to game.html
        });

        // add styles to the image and the parent div
        winImage.classList.add('winStyle');
        winImageDiv.classList.add('winDivStyle');

        // Include the source of the win image
        winImage.src = "img/win.png";
    
        // Append the child element to their parent containers
        body.appendChild(winImageDiv);
        winImageDiv.appendChild(winImage);
        winImageDiv.appendChild(winDivText);
        winDivText.appendChild(winText)
        body.appendChild(winBtnDiv)
        winBtnDiv.appendChild(replayBtn)
        winBtnDiv.appendChild( wlcBckBtn)
    }
}


// Add click event listener for moles
mole.forEach(moleImg => {
    moleImg.addEventListener("click", clickHandler);
});

// Animation loop for each mole
mole.forEach((moleImg, index) => {
    animateMole(moleImg, index * 2000); // Adjust delay for each mole
});

// Animation loop for each mole
function animateMole(moleImg, delay) {
    setTimeout(() => {
        // Randomly determine if the mole will be a king mole
        const isKingMole = Math.random() < 0.5;

        if (isKingMole) {
            // If it's a king mole, set it to hungry king
            changeImage(moleImg, hungryKing);
        } else {
            // If it's a regular mole, set it to hungry
            changeImage(moleImg, hungry);
        }

        setTimeout(() => {
            // Change image to sad or sad king after a delay 
            if (isKingMole) {
                changeImage(moleImg, sadKing);
            } else {
                changeImage(moleImg, sad);
            }

            setTimeout(() => {
                // Change image to leaving or leaving king after another delay
                if (isKingMole) {
                    changeImage(moleImg, leaveKing);
                } else {
                    changeImage(moleImg, leave);
                }
            }, 4000);
        }, 2000); // Delay before transitioning to sad state, adjust as needed
    }, delay); // Delay before starting the animation, adjust as needed
}


// Create an array of objects
const moleObjects = Array.from(mole).map(moleImg => {
    return {
        element: moleImg,
        appearTime: getRandomTime(5000, 20000),
        disappearTime: getRandomTime(4000, 20000)
    };
});

// Function to make moles appear and disappear randomly
function appearAndDisappear(moleObjects) {
    moleObjects.forEach(eachMole => {
        setTimeout(() => {
            eachMole.element.classList.remove('hide');
            eachMole.element.classList.add('show');

            setTimeout(() => {
                eachMole.element.classList.remove('show');
                eachMole.element.classList.add('hide');
            }, eachMole.disappearTime);
        }, eachMole.appearTime);
    });
}

appearAndDisappear(moleObjects);



