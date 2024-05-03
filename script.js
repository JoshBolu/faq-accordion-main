//decalare the dom elements that need to be manipulated
const question_cont = document.querySelectorAll(".question-cont");
const answer_cont = document.querySelectorAll(".answer-cont");
const svg_cont = document.querySelectorAll(".svg-container");

//get both plus and minus icon to be displayed as answers are being toggled
const new_svg_content = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 30 31"><path fill="#301534" d="M15 3.313A12.187 12.187 0 1 0 27.188 15.5 12.2 12.2 0 0 0 15 3.312Zm4.688 13.124h-9.375a.938.938 0 0 1 0-1.875h9.374a.938.938 0 0 1 0 1.876Z"/></svg>`
const old_svg_content = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 30 31"><path fill="#AD28EB" d="M15 3.313A12.187 12.187 0 1 0 27.188 15.5 12.203 12.203 0 0 0 15 3.312Zm4.688 13.124h-3.75v3.75a.938.938 0 0 1-1.876 0v-3.75h-3.75a.938.938 0 0 1 0-1.875h3.75v-3.75a.938.938 0 0 1 1.876 0v3.75h3.75a.938.938 0 0 1 0 1.876Z"/></svg>`


question_cont.forEach((question, index) => {//used to loop over each element under the class where question represents each element and index keeps track of the number of iteration.
    question.addEventListener("click", ()=> {

        const answer = question.nextElementSibling; // Get the next sibling (answer) of the clicked question

        // Hide all answers
        answer_cont.forEach((ans, index) => {
            if (ans !== answer) { // Skip the answer associated with the clicked question
                show_answer(ans,answer,svg_cont,index);
            }
        });

        toggle_ans(answer,index,svg_cont);
        
    })
    
    question.addEventListener('keypress', event => {

        const answer = question.nextElementSibling; // Get the next sibling (answer) of the clicked question

        // Check if the Enter key was pressed (key code 13) or 'Enter' key 
        if(event.key === 'Enter' || event.keyCode === 13){
            answer_cont.forEach((ans, index) => {
                show_answer(ans,answer,svg_cont,index);
            });

        toggle_ans(answer,index,svg_cont);
        }
    })
})    

//function to make sure onl the presently read answer is being displayed
function show_answer(ans,answer,svg_cont,index){
    if (ans !== answer) { // Skip the answer associated with the clicked question
        ans.style.display = 'none';
        svg_cont[index].innerHTML = old_svg_content;//changes the minus back to plus when the next question answer is opened without closing it manually 
}

}

//function to handle the toogle behaviour to aviod repitition
function toggle_ans(answer,index,svg_cont){
    // Toggle the display of the clicked answer 
    if (answer.style.display === 'block') {
        answer.style.display = 'none';
        svg_cont[index].innerHTML = old_svg_content;//used to change the minus icon to plus when the answer is closed 
    } 
    else {
        answer.style.display = 'block';
        svg_cont[index].innerHTML = new_svg_content;//used to change the plus icon to minus when the answer is opened
    }
}