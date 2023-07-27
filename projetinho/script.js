document.addEventListener("DOMContentLoaded", function () {
    const taskInput = document.getElementById("taskInput");
    const addButton = document.getElementById("addButton");
    const taskList = document.getElementById("taskList");
  
    addButton.addEventListener("click", addTask);
  
    function addTask() {
      const taskText = taskInput.value.trim();
      if (taskText === "") return;
  
      const taskItem = document.createElement("li");
      taskItem.innerHTML = `
        <span>${taskText}</span>
        <button class="completeButton">Concluir</button>
        <button class="removeButton">Remover</button>
      `;
  
      taskList.appendChild(taskItem);
      taskInput.value = "";
  
      const completeButton = taskItem.querySelector(".completeButton");
      completeButton.addEventListener("click", completeTask);
  
      const removeButton = taskItem.querySelector(".removeButton");
      removeButton.addEventListener("click", removeTask);
    }
  
    function completeTask(event) {
      const taskItem = event.target.parentElement;
      taskItem.classList.toggle("completed");
    }
  
    function removeTask(event) {
      const taskItem = event.target.parentElement;
      taskList.removeChild(taskItem);
    }
  });
  