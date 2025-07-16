let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#reset");
let newbt=document.querySelector(".newbtn");
let msg=document.querySelector("#msg");
let container=document.querySelector(".msg-container");
let turnx=true;
let count=0;
const winpatterns =[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
const resbtn=()=>{
    let turnx=true;
    enableboxes();
    count=0;
    container.classList.add("hide");
};
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turnx){
            box.innerText="X";
            turnx=false;
        }else{
            box.innerText="O";
            turnx=true;
        }
        box.disabled=true;
        count++
        let isWinner = checkWinner();
        if (count === 9 && !isWinner) {
            gameDraw();
        }
    });
});
const gameDraw=()=>{
    msg.innerText=`game is draw`
    container.classList.remove("hide");
}
const enableboxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText=""
    }
};
const disableboxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
};
const showWinner=(winner)=>{
    msg.innerText=`congrtulations,Winner is ${winner}`;
    disableboxes();
    container.classList.remove("hide");
};
const checkWinner=()=>{
    for(let pat of winpatterns){
        let posval1=boxes[pat[0]].innerText;
        let posval2=boxes[pat[1]].innerText;
        let posval3=boxes[pat[2]].innerText;
        if( posval1 != "" && posval2 !=""  && posval3 != ""){
            if(posval1===posval2 && posval2===posval3){
               showWinner(posval1);
               return true;
        }
    }
    }
};
resetbtn.addEventListener("click",resbtn);
newbt.addEventListener("click",resbtn);



