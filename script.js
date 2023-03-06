addBtn= document.getElementById("add-btn");
todoHerocase =document.getElementById("todo-herocase");
todoHero = document.getElementById("todo-hero");

addBtn.addEventListener("click", (e) =>{
     
    let todo = document.createElement("div");
    todo.classList.add("todo");


    let li = document.createElement("li");
    li.innerText =`${todoHero.value}`;
    todo.appendChild(li);

    let checkButton = document.createElement("button");
    checkButton.innerHTML = '<i class = "fa-solid fa-check"></i>';
    checkButton.classList.add("todo-check");
    todo.appendChild(checkButton);

    let deleteButton =document.createElement("button");
    deleteButton.innerHTML = '<i class="fa-solid fa-trash"></i>';
    deleteButton.classList.add("todo-delete");
    todo.appendChild(deleteButton);

    if(todoHero.value === ""){
        alert("Please enter some text");
    }
    else{
        todoHerocase.appendChild(todo);
    }

    todoHero.value ="";
});

todoHerocase.addEventListener("click",(e)=>{
    let target = e.target;
    if(target.classList.contains("todo-delete")){
      let item = target.parentElement;
      item.remove();
    }
    
    if(target.classList.contains("todo-check")){
      let item = target.parentElement;
      item.classList.toggle("completed");
    }
});
