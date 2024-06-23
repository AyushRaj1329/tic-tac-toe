let boxex = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset");
let turn = true;
let winner = document.querySelector("#winner");
let msg = document.querySelector(".msg");
let newgame = document.querySelector("#newgame")
const winpattern = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]
const reset = () => {
    turn = true;
    enable();
    msg.classList.add("hide")
}
let count=0;
boxex.forEach((box) => {
    box.addEventListener("click", () => {
        // console.log("clicked");
        if (turn == true) {
            box.innerText = "O"
        
            turn = false;
        }
        else {
            box.innerText = "x"
            turn = true
        }
        box.disabled = true;
        checkwinner();
        count++;
        if(count==9){
            draw();
        }
    });
})
const checkwinner = () => {
    for (let pattern of winpattern) {
        let var1 = boxex[pattern[0]].innerText;
        let var2 = boxex[pattern[1]].innerText;
        let var3 = boxex[pattern[2]].innerText;
        if (var1 != "" && var2 != "" && var3 != "") {
            if (var1 == var2 && var2 == var3) {
                console.log("winner ", var1)
                showWinner(var1);
            }
        }
    }
}
const showWinner = (var1) => {
    winner.innerText = `Congratulation,Winner is: ` + var1;
    msg.classList.remove("hide")
    disable();

}
const disable = () => {
    for (let box of boxex) {
        box.disabled = true;
    }
}
const enable = () => {
    for (let box of boxex) {
        box.disabled = false;
        box.innerText = "";
    }
}
const draw=()=>{
    winner.innerText = `DRAW, Try again`;
    msg.classList.remove("hide")
}
newgame.addEventListener("click", reset);
resetBtn.addEventListener("click", reset)