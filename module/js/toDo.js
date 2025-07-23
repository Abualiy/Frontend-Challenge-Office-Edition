export const toDo = () => {
  // ====== TO-DO LIST ======
  const todoInput = document.getElementById("todo-input");
  const todoList = document.getElementById("todo-list");
  const addTodoBtn = document.getElementById("add-todo");

  // Save todos with their checked state
  function saveTodos() {
    const todos = [...todoList.children].map((li) => {
      const checkbox = li.querySelector("input[type='checkbox']");
      const task = li.querySelector("span.todo-text").textContent;
      return { task, done: checkbox.checked };
    });
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  // Load todos from localStorage
  function loadTodos() {
    const saved = JSON.parse(localStorage.getItem("todos") || "[]");
    saved.forEach(({ task, done }) => addTodo(task, done));
  }

  // Add new todo
  function addTodo(taskText, isDone = false) {
    const li = document.createElement("li");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = isDone;
    checkbox.addEventListener("change", saveTodos);

    const text = document.createElement("span");
    text.textContent = taskText;
    text.classList.add("todo-text");
    text.style.marginLeft = "0.5rem";

    const delBtn = document.createElement("span");
    delBtn.textContent = " ❌";
    delBtn.style.cursor = "pointer";
    delBtn.style.marginLeft = "0.5rem";
    delBtn.addEventListener("click", () => {
      li.remove();
      saveTodos();
    });

    li.appendChild(checkbox);
    li.appendChild(text);
    li.appendChild(delBtn);
    todoList.appendChild(li);
  }

  addTodoBtn.addEventListener("click", () => {
    const val = todoInput.value.trim();
    if (!val) return;
    addTodo(val);
    saveTodos();
    todoInput.value = "";
  });

  loadTodos();
};
