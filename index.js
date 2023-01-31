// we use Math.ceil to round up number
const num1 = Math.ceil(Math.random()*10);
const num2 = Math.ceil(Math.random()*10);
const questionEl=document.getElementById("question");
const formEl=document.getElementById("form");
const inputEl=document.getElementById("input");
const scoreEl=document.getElementById("score");

// as score is string we use jason parse
let score=JSON.parse(localStorage.getItem("score"));

if(!score){
    score=0;
}

scoreEl.innerText=`score: ${score}`;
// to use different type of variables use back single quote
questionEl.innerText = `What is ${num1} multiply by ${num2}?`;
const correctAns=num1*num2;

// whenever user click submit we activate a function
formEl.addEventListener("submit",()=>{

    // save user input to a variable, we add + to convert it to a integer
    const userAns=+inputEl.value;
    if(userAns==correctAns){
        score++;
        updateLocalStorage();
    }else{
        score--;
        updateLocalStorage();
    }

});

function updateLocalStorage(){
    localStorage.setItem("score",JSON.stringify(score))
}