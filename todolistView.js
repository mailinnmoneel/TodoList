// View
var tasksTable = document.getElementById('app');

updateViewTodolist();

function updateViewTodolist(i) 
{       
        let html = `
        <div class="navbar">
            <a href="#Todo" onclick="gotoToDoListPage()"> Todo list </a>
            <a href="#AddNewTask" onclick="gotoAddTaskPage()"> Add new task </a>
        </div>

        
        <table class="main">
            <tr>
                <th>Name</th>    
                <th>Task</th>
                <th></th>
                <th></th>
                <th>Duedate</th>
                <th>Date done</th>
            </tr>       
        </table>        
     
        `
    ;
        for (let i = 0; i < model.tasks.length; i++) 
        {
            html += createHtmlRow(i);
        }
    tasksTable.innerHTML = html;
}
    
function createHtmlRow(i) 
{
    const person = model.tasks[i]; 
    const task = model.tasks[i];
    const checkedHtml = task.isDone ? 'checked="checked"' : '';
    const dateOutput = task.isDone ? new Date().toLocaleDateString() : '';
        if (!task.editMode)
            return `
        <table>    
            <tr>
                <td>${task.person}</td>
                <td>${task.description}</td>
                <td><input onchange="changeIsDone(this, ${i})" type="checkbox" ${checkedHtml} /></td>
                
                <td>
                    <button id="editId" onclick="editTask(${i})">Edit</button> 
                    <button id="deleteId" onclick="deleteTask(${i})">Delete</button>
                </td>

                <td><div id="dueDate${i}"></div>${task.date}</td>
                <td><div id=datoOutput"</div>${dateOutput}</td>
            </tr>
        </table>

     `;
            return `
        <table>    
            <tr>
                <td><input id="editPerson${i}" type="text" 
                    placeholder = "${model.message.nameField}"
                    oninput = "model.personInput = this.value"/>
                </td>
                <td><input id="editDescription${i}" type="text"
                    placeholder="${model.message.taskField}" 
                    oninput = "model.taskInput = this.value"/>
                </td>
                <td></td>
                <td>
                <button id="saveId" onclick="updateTask(${i})">Save</button>               
                </td>
                <td><tt><input id="editDate${i}" 
                    type="date" onchange = "model.dateInput = this.valueAsDate.toLocaleDateString().substr(0,10)">
                    </tt>${model.message.dateField}</td>
                <td><tt></tt>${dateOutput}</td>
            </tr>  
        </table>   
    `;
}
