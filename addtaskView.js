function updateViewaddTask()
{
    document.getElementById('app').innerHTML = `
        
        <button onclick="gotoToDoListPage()">Go to your list</button>
        <hr/>

        <h1>This is the add task page</h1>

        <div><input type="text" oninput = "model.personInput = this.value" />Name</div>
        <div><input type="text" oninput = "model.taskInput = this.value" />Task</div>
        <div><input id="datoInput" type="date" onchange = "model.dateInput = this.valueAsDate.toLocaleDateString().substr(0,10)"></div> 
        <div><button onclick="addTask()">Legg til oppgave</button></div>

    `;
}