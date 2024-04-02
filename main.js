let displayScreen = document.querySelector(".number ");

let showButtonText = document.querySelectorAll(".show");
// console.log(showButtonText)

// this part shows the items character on the screen
showButtonText.forEach((item) => {
  item.addEventListener("click", function showAsText(event) {
    const x = event.target.innerText;
    if (displayScreen.innerText == 0) {
      return (displayScreen.innerText = x);
    }
    if (displayScreen.innerText.length>=12){
        return;
    }
    return (displayScreen.innerText += x); 
    //add other buttons that user click on to the number inside the screen
    
  });
});


//equal buttons function
document.querySelector(".equal").addEventListener("click", function isEqualTo() {
    // console.log(typeof displayScreen.innerText);
    // const y = +(displayScreen.innerHTML); //unary plus doesn't work here
    const y = eval(displayScreen.innerText);
    console.log(y);
    // console.log(typeof y);
    displayScreen.innerText = y;
  });

//clear all button function
document.querySelector(".clear-all").addEventListener("click", function clearWholeText() {
    if ((displayScreen.innerText = !0)) {
      displayScreen.innerText = 0;
    }
  });

//clear button function

document.querySelector(".clear").addEventListener("click", function backspaceButton (){
    // if (displayScreen.innerText =! 0) {
        let text = displayScreen.innerText ;
        if (text.length === 1 ){
            displayScreen.innerText = 0;
        } else {
            displayScreen.innerText = text.substring(0 , text.length-1 )
        }
    }
// }
)

