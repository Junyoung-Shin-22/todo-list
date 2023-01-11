function onClickCreateButton() {
    // console.log("Create Button Clicked");
    // console.log("input value: " + inputTitle.value);

    createNewTodoItem(inputTitle.value);
}

function onClickItem(item) {
    // console.log(item.className)
    if (item.className == "item todo") item.className = "item done";
    else item.className = "item todo";
    
}

function createNewTodoItem(text) {
    var div = document.createElement("div");
    div.className = "item";
    
    var p = document.createElement("p");
    p.classList.add("item", "todo")
    p.textContent = text;
    p.onclick = () => {onClickItem(p);};

    var r = document.createElement("p");
    r.className = "remove"
    r.textContent = "X";
    r.onclick = () => {removeTodoItem(div);};
    
    div.appendChild(p);
    div.appendChild(r);

    todoList.appendChild(div);
}

function removeTodoItem(item) {
    if (todoList.contains(item)) todoList.removeChild(item);
}

inputTitle = document.querySelector("#input-title");

createButton = document.querySelector("#create-button");
createButton.onclick = onClickCreateButton;

todoList = document.querySelector(".todo-list");

