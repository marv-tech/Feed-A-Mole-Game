const mole = document.querySelectorAll('.hungryMoleImg');

const hungry = "img/mole-hungry.png";
const sad = "img/mole-sad.png";
const fed = "img/mole-fed.png";
const leave = "img/mole-leaving.png";

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
        counter++;
        moleImg.src = fed;
        setTimeout(() => {
            moleImg.src = leave;
        }, getRandomTime(1000, 3000));
    }

    const worm = document.querySelector('.worm-container');
    worm.style.display = "block";
    worm.style.width = (counter * 10) + '%';

    if (counter > 4 && counter < 7) {
        const mainPage = document.querySelector('#mainPage');
        mainPage.style.display = "none";
        const winImageDiv = document.createElement('div');
        const winImage = document.createElement('img');
        winImage.classList.add('winStyle');
        winImage.src = "img/win.png";
        const body = document.querySelector('#pageBody');
        body.appendChild(winImageDiv);
        winImageDiv.appendChild(winImage);
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

// Function to animate each mole
function animateMole(moleImg, delay) {
    setTimeout(() => {
        changeImage(moleImg, hungry); // Change image to hungry immediately
        setTimeout(() => {
            changeImage(moleImg, sad); // Change image to sad after a delay 
            setTimeout(() => {
                changeImage(moleImg, leave); // Change image to leaving after another delay
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
