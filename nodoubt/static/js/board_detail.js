const boardCommentAnswerButton = document.querySelectorAll(".board_comment_answer_button");

boardCommentAnswerButton.forEach(function(event){
    event.addEventListener("click", paintTextarea);
})

function paintTextarea(event){
    const targetDiv = event.path[3];
    const targetWriter = targetDiv.querySelector("p").innerText;
    const input = `@${targetWriter} `;
    const commentCreateInput = document.querySelector("#comment_create_input");
    commentCreateInput.value = input;
}