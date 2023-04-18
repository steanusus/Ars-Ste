let comments = [];
loadComments();

document.getElementById("comment-add").onclick = function(){
    event.preventDefault();
    let commentName = document.getElementById("comment-name");
    let commentBody = document.getElementById("comment-body");

    let comment = {
        name : commentName.value,
        body : commentBody.value,
        time : Math.floor(Date.now()/1000)
    }
    commentName.value = "";
    commentBody.value = "";
    comments.push(comment);
    saveComments();
    showComments();
    console.log(comment);
}
function saveComments(){
    localStorage.setItem("comments", JSON.stringify(comments));
}
function showComments(){
    let commentField = document.getElementById("comment-field");
    let out = ""
    comments.forEach(function(item){
        out +=`<p class="aletr alert-success">${item.body}</p>`
        out +=`<p class="aletr alert-primary">${item.name}</p>`
        out +=`<p class="text-right small"><em>${timeConverter(item.time)}</em></p>`
    });
    commentField.innerHTML = out;
}
function timeConverter(UNIX_timestamp){
    let a  = new Date(UNIX_timestamp * 1000);
    let months = ["Jan","Feb","Mar","Apr","may","jun","jul","aug","sep","oct","nov","dec"]
    let year = a.getFullYear();
    let month = months[a.getMonth()];
    let date = a.getDate();
    let hour = a.getHours();
    let min = a.getMinutes();
    let sec = a.getSeconds();
    let time = date + " " + month + " " + year + " " + hour + ":" + min + ":" + sec;
    return time;
}
function loadComments(){
    if(localStorage.getItem("comments")) comments = JSON.parse(localStorage.getItem("comments"));
    showComments();
}