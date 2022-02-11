console.log ("Let's goooo");

// FUNCTIONS

//BTN
function clickOnBtn(){
    rectangle.classList.toggle("newColor");

    if(btn.textContent == "Pour du terracotta"){
        btn.textContent = "Pour du bleu";
    }
    else{
        btn.textContent = "Pour du terracotta";
    }
    

    // console.log("clickOnBtn");
}

// KeyBoard move
function onKeyDown(event){
    switch(event.key){
        case"ArrowDown":
        rectangleTop ++;
        rectangle.style.top = `${rectangleTop}px`
        break;

        case "ArrowUp":
        rectangleTop --;
        rectangle.style.top = `${rectangleTop}px`
        break;

        case "ArrowRight":
        rectangleLeft ++;
        rectangle.style.left = `${rectangleLeft}px`
        break;

        case "ArrowLeft":
        rectangleLeft --;
        rectangle.style.left = `${rectangleLeft}px`
        break;

        default : 
        alert("Utilisez les flèches de direction");
    }
    // console.log(event);
}


// MAIN CODE
let btn       = document.getElementById('toggleBtn');
let rectangle = document.getElementById('rectangle'); 

let rectangleLeft  = 0;
let rectangleTop   = 0;

btn.addEventListener('click', clickOnBtn);
document.addEventListener("keydown", onKeyDown, true);


/* *** USEFUL LINKS ***
    Click event
    https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent

    KeyBoard event
    https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent
*/