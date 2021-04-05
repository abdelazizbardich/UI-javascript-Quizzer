const answer = document.querySelector("#answer");
const addanswer = document.querySelector("#addanswer");
const reqBox = document.querySelector("#req-box");

const bigForm = document.querySelector(".quiz-form");

addanswer.addEventListener('click',()=>{
    let answerData = answer.value;
    if(!(/^[a-zA-Z]{6,12}$/.test(answerData))){
        alert("Error!");
        return false;
    }
    reqBox.innerText = answerData;
    document.querySelector("#signed").value="1";
    document.querySelector("#signed").value="1";
    reqBox.style.display = "block";
    addanswer.setAttribute("disabled",true);
});


bigForm.addEventListener('submit', e =>{
    e.preventDefault();
    const signedState = document.querySelector("#signed").value;
    if(signedState != "1")
        return false;
    let answers = document.querySelectorAll('[type="radio"]:checked');
    animaterToScore(getScore(answers));
});


function getScore(answers){
    let score = 0;
    let GoodAnswers = ["B","B","B","B"];
    answers.forEach((element,index)=>{
        if(element.value == GoodAnswers[index]){
            score += 25;    
        }
    });
    return score;
}


function animaterToScore(score){
    let scoreHolder = document.getElementById("result");
    scoreHolder.classList.remove("d-none");
    score = parseInt(score);
    step = 0;
    setInterval(() => {
        if(step >= score){ return false;}
        step++;
        document.querySelector(".score").innerText = " "+step+"% ";
    }, 50);
}