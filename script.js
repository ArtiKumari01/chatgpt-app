let inputs = document.getElementById("inp");
let text = document.querySelector(".text");

function addTask(param){
        let questionEle = document.createElement("ul");
        questionEle.innerHTML = `${param} <i class="fa-sharp fa-solid fa-trash"></i>`;
        text.appendChild(questionEle);
        
        inputs.value = "";
        questionEle.querySelector("i").addEventListener("click",remove);
        function remove(){
            questionEle.remove();
            // answerEle.remove();
    }
}
// function addTask2(ans){
        
//     let answerEle = document.createElement("div");
//     answerEle.innerHTML = `${par}`;
//     text.appendChild(answerEle);
        
//         inputs.value = "";
//         questionEle.querySelector("i").addEventListener("click",remove);
//         function remove(){
//             questionEle.remove();
//             answerEle.remove();
//     }
// }

// let inputs = document.getElementById("inp");
// let text = document.querySelector(".text");
// function addTask(par){
//         // console.log("entered task!",par);
//         let newEle = document.createElement("ul");
//         newEle.innerHTML = `${par} <i class="fa-sharp fa-solid fa-trash"></i>`;
//         text.appendChild(newEle);
//         inputs.value = "";
//         newEle.querySelector("i").addEventListener("click",remove);
//         function remove(){
//             newEle.remove();
//     }
// }