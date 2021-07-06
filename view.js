// View
var tasksTable = document.getElementById('tasksTable');
show();

function show() {
        let html = `
        <tr>
            <th>Person</th>    
            <th>Oppgave</th>
            <th></th>
            <th></th>
            <th>Frist</th>
            <th>Gjort dato</th>
        </tr>
            <th><input id="personDescription" type="text"/></th>
            <th><input id="taskDescription" type="text"/></th>
            <th></th>
            <th><button onclick="addTask()">Legg til oppgave</button></th>
            <th><input id="datoInput" type="date" onchange="model.dateInput = this.valueAsDate.toLocaleDateString().substr(0,10)"></th>
            <th></th>        
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
                <td><tt><div id="dueDate${i}"></div>${task.d}</tt></td>
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