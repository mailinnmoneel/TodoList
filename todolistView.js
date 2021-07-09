// View
var tasksTable = document.getElementById('app');

updateViewTodolist();

function updateViewTodolist(i) 
{       
        let html = `

        <button onclick="gotoAddTaskPage()">Go to Add Task Page</button>
        <table>
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
                <button onclick="deleteTask(${i})">Delete</button>
                <button onclick="editTask(${i})">Change</button>
                <td><tt><div id="dueDate${i}"></div>${task.date}</tt></td>
                <td><tt> <div id=datoOutput"</div>${dateOutput}</tt></td>
                </td>
                 </tr>
        </table>

     `;
            return `
        <table>    
                <tr>
                <td><input id="editPerson${i}" type="text" value="${task.person}"/></td>
                <td><input id="editDescription${i}" type="text" value="${task.description}"/></td>
                <td><input onchange="changeIsDone(this, ${i})" type="checkbox"${checkedHtml}/></td>
                <td>
                <button onclick="updateTask(${i})">Save</button>               
                </td>
                <td><tt><input id="editDate${i}" type="date"/></tt></td>
                <td><tt></tt>${dateOutput}</td>
                </tr>  
        </table>        
    `;
}
