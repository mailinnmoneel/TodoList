// View
var tasksTable = document.getElementById('app');

updateViewTodolist();

function updateViewTodolist(i) 
{       
        let html = `

        <button onclick="gotoAddTaskPage()">Go to Add Task Page</button>

        <tr>
            <th>Person</th>    
            <th>Oppgave</th>
            <th></th>
            <th></th>
            <th>Frist</th>
            <th>Gjort dato</th>
        </tr>       
        
     
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
            <tr>
                <td>${task.person}</td>
                <td>${task.description}</td>
                <td><input onchange="changeIsDone(this, ${i})" type="checkbox" ${checkedHtml} /></td>
                <td>
                <button onclick="deleteTask(${i})">Slett</button>
                <button onclick="editTask(${i})">Endre</button>
                <td><tt><div id="dueDate${i}"></div>${task.date}</tt></td>
                <td><tt> <div id=datoOutput"</div>${dateOutput}</tt></td>
                </td>
            </tr>


     `;
            return `<tr>
                <td><input id="editPerson${i}" type="text" value="${task.person}"/></td>
                <td><input id="editDescription${i}" type="text" value="${task.description}"/></td>
                <td><input onchange="changeIsDone(this, ${i})" type="checkbox"${checkedHtml}/></td>
                <td>
                <button onclick="updateTask(${i})">Lagre</button>               
                </td>
                <td><tt><input id="editDate${i}" type="date"/></tt></td>
                <td><tt></tt>${dateOutput}</td>
                </tr>  
    `;
}
