console.log('test')
const test = 'test'
localStorage.setItem('test', test)
console.log(localStorage.getItem('test'))

const readInput = () => {
    const ToDoList =  localStorage.getItem("ToDoList") !== null 
    ? JSON.parse(localStorage.getItem("ToDoList")) 
    : []
    const newToDoItem = {
        id: Math.random(),
        task: "",
    }
    const inputValue = document.getElementById('input').value
    document.getElementById('input').value = ""
    console.log(inputValue)
    newToDoItem.task = inputValue
    console.log(newToDoItem.task)
    ToDoList.push(newToDoItem)
    localStorage.setItem("ToDoList", JSON.stringify(ToDoList))
    console.log(JSON.parse(localStorage.getItem("ToDoList")))
    const arr = JSON.parse(localStorage.getItem("ToDoList"));
    const html = arr.map((item) => 

        `<div class="TodoTasks">
                <div class="TodoTasksItem">
                ${item.task}
                </div>
                <button class="TodoTasksItemButton">click</button>
        </div>`
    ).join('');
    document.querySelector('ul').innerHTML = html;
    
}
