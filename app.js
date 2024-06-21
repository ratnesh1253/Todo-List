let taskInput = document.querySelector("input");
let addTaskBtn = document.querySelector("button");
let taskList = document.querySelector("ol");

addTaskBtn.addEventListener("click", () => {
  if (taskInput.value != "") {
    let task = document.createElement("li");
    task.innerText = taskInput.value;

    let checkBtn = document.createElement("img");
    checkBtn.src = "assets/check-solid.svg";
    checkBtn.classList.add("check");
    task.appendChild(checkBtn);

    let delBtn = document.createElement("img");
    delBtn.src = "assets/xmark-solid.svg";
    delBtn.classList.add("delete");
    task.appendChild(delBtn);

    taskList.appendChild(task);
    taskInput.value = "";
  }
});

//using event bubbling
taskList.addEventListener("click", (event) => {
  if (event.target.className == "delete") {
    let listItem = event.target.parentElement;
    listItem.remove();
  } else if (event.target.className == "check") {
    event.target.parentElement.style.textDecoration = "line-Through";
  }
});
