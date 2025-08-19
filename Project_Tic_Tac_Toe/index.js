let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");

let newGameBtn = document.querySelector("#new-game");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

//playerX, playerO
let turnO = true;

const arr = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];


boxes.forEach((box) => {
    box.addEventListener('click', () => {
        if(turnO){
            box.innerHTML = "O";
            turnO = false;
        }

        else{
            box.innerHTML = "X";
            turnO = true;
        }
        box.disable = true;

        checkWinner();
    })
});

const checkWinner = () => {
        for(let pattern of arr){
            let pos1 = boxes[pattern[0]].innerText;
            let pos2 = boxes[pattern[1]].innerText;
            let pos3 = boxes[pattern[2]].innerText;

            if(pos1 != "" && pos2 !="" && pos3 != ""){
                if(pos1 === pos2 && pos2 === pos3){
                    showWinner(pos1);
                    
                }
            }        
        };        
};

const showWinner = (winner) => {
    msg.innerHTML = `Congratulations!! Our WINNER is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBtn();
}


const disableBtn = () => {
    for(let box of boxes){
        box.disable = true;

    }
}

const enableBtn = () => {
    for(let box of boxes){
        box.disable = false;
        box.innerText = "";                
    }
}

const resetGame = () => {
    turnO = true;
    enableBtn();
    msgContainer.classList.add("hide");
}


newGameBtn.addEventListener("click", resetGame);
reset.addEventListener("click", resetGame);


