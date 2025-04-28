let input_box = document.getElementById("input-box");
let list_container = document.getElementById("list-container");
let btn = document.querySelector(".btn");
btn.addEventListener("click",addTask);

function addTask(){
if(input_box.value=== ''){
    alert("You need to type something");
}
else{
    let li = document.createElement("li");
    li.innerHTML= input_box.value;
    list_container.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML="\u00d7";
    li.appendChild(span);
}
input_box.value="";
saveData();
}

// ClassList is a built-in JavaScript property that allows you to add, remove, or toggle
// CSS classes on an element dynamically. toggle means if class is there then remove it 
// else add it
list_container.addEventListener("click",(e)=>{
if(e.target.tagName==="LI"){
    e.target.classList.toggle("checked");
    saveData();
}
else if(e.target.tagName==="SPAN"){
    e.target.parentElement.remove();
    saveData();
}
},false);

// localStorage is a built-in storage mechanism in JavaScript that allows websites to store
// key-value pairs in a user's browser permanently (until manually cleared).
// localStorage.setItem("key", "value");

function saveData(){
    localStorage.setItem("data",list_container.innerHTML);
}

function showData(){
    list_container.innerHTML=localStorage.getItem("data")

}
showData();
