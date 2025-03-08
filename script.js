let numOp = document.querySelectorAll(".numOp");
let screen = document.querySelector("#screen");
screen.style.color = "white";



let s = "";
Array.from(numOp).forEach((ele) => {
    ele.addEventListener("click",(e)=>{
        ele.style.backgroundColor = "rgba(99, 220, 99, 0.89)";
        ele.style.color = "black";

        setTimeout(() => {
            ele.style.backgroundColor = "rgb(31, 28, 28, 0.86)";
            ele.style.color = "white";
        },100);
        if(e.target.innerText == '='){
            s = eval(s);
        }
        else if(e.target.innerText == 'AC'){
            s = "";
        }
        else{
            s = s + e.target.innerHTML;
        }
        screen.innerText = s;
    })
});


