var todo = [
    // id = 0 ;
    // title = SMIT Task compelet 
];

var heading = document.createElement("h1");
heading.innerText = "Todo list item";
document.body.appendChild(heading);

var input = document.createElement("input");
input.placeholder = "Enter you task";
document.body.appendChild(input);

var btn = document.createElement("button")
btn.innerText = "Task Add";
document.body.appendChild(btn);

var listremove = document.createElement("div");
document.body.appendChild(listremove);

function render(){
    listremove.innerHTML= ""

    todo.forEach((Object , index )=>{
     
     var  taskDiv = document.createElement("div")
     
     var title_P = document.createElement("p")
     title_P.innerText = Object.title

     var delBtn = document.createElement("button")
     delBtn.innerText = "Delete"
     delBtn.onclick = () => {
        todo.splice(index ,1)
        render();
     };

     var editBtn = document.createElement("button")
     editBtn.innerText = "Edit"
     editBtn.onclick= ()=>{
        let newVal = prompt("Edit task:", Object.title);
        if(newVal) {
            todos[index].title = newVal;
            render();
        }
     };

     taskDiv.appendChild(title_P)
     taskDiv.appendChild(editBtn)
     taskDiv.appendChild(delBtn)
     

     listremove.appendChild(taskDiv);
})
}


// button onClick logic

btn.onclick = () => {
    if (input.value.trim() !== "") {
        const newObj = {
            id: Date.now(),
            title: input.value,
            completed: false
        };
        todo.push(newObj);
        input.value = "";
        render();
    }
};
