var input = document.querySelector("#input_box");
var listContainer = document.querySelector(".list_container");
var addButton  = document.querySelector("#addBtn");

addButton.addEventListener("click", ()=>{
   addTask();
});
input.addEventListener("keypress", (e)=>{
    if(e.key === 'Enter') addTask();
});

listContainer.addEventListener('click', (e)=>{
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }

},false)

function addTask(){
     if(input.value === ''){
        alert("You must write something!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = input.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = '\u00d7';
        li.appendChild(span);
    }
    input.value = '';
    saveData();
}

function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);
}
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();