// homeScoring
let homePlusOne = document.querySelector(".homePlusOne");
let homePlusTwo = document.querySelector(".homePlusTwo");
let homePlusThree = document.querySelector(".homePlusThree"); 
let title = document.querySelector(".title");
let addHere = document.querySelector(".addHere")

// guestScoring
let guestPlusOne = document.querySelector(".guestPlusOne");
let guestPlusTwo = document.querySelector(".guestPlusTwo");
let guestPlusThree = document.querySelector(".guestPlusThree");

// home and guest count
let homeCount = document.querySelector(".homeCount");
let guestCount = document.querySelector(".guestCount");

let endGame = document.querySelector(".endGame");
let newGame = document.querySelector(".newGame");

// both team score default value
let homeScore = 0;
let guestScore = 0;

//NEW GAME BUTTON
newGame.addEventListener("click", function(){
   homeCount.innerHTML = 0;
   guestCount.innerHTML = 0;
   addHere.innerText = "Start the Game";
   homeScore = 0;
   guestScore = 0;
})

//END GAME BUTTON
endGame.addEventListener("click",function(){
   
    
    if(homeScore === 0 && guestScore === 0){

        addHere.innerText = "NO RESULT";
    }
    else if(homeScore == guestScore){
        addHere.innerText = "DRAW";
    }
    else if(homeScore > guestScore){
        addHere.innerText = "HOME TEAM WINS";
    
    }
    else if(homeScore < guestScore){
        addHere.innerText = "GUEST TEAM WINS";
   
   }
   
})

// clicking button home score function
homePlusOne.addEventListener("click", function(){
    homeScore += 1; 
    homeCount.innerText = homeScore;
})

homePlusTwo.addEventListener("click", function(){
    homeScore += 2;   // 0 + 1 = 1
    homeCount.innerText = homeScore; // 1 + 1 = 2 

})
homePlusThree.addEventListener("click", function(){
    homeScore += 3;   // 0 + 2 = 2
    homeCount.innerText = homeScore; // 2 + 1 = 2 
})


// clicking button guest score function
guestPlusOne.addEventListener("click", function(){
    guestScore += 1; 
    guestCount.innerText = guestScore;
})

guestPlusTwo.addEventListener("click", function(){
    guestScore += 2;
    guestCount.innerText = guestScore;
})


guestPlusThree.addEventListener("click", function(){
    guestScore += 3; 
    guestCount.innerText = guestScore;
})





