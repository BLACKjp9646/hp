
let btn = document.querySelector("button");

btn.addEventListener("click",()=>{
    let number=$("input").val();
    for(let i=0;i<number;i++){
    let tomas = document.createElement("img");
    tomas.src = "img/tomasu.png";
    tomas.alt = "tomasu";
    tomas.width=50;
    tomas.height=50;
    $("#tomasimg").append(tomas)
    }
})