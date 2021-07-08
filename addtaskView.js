function updateViewaddTask()
{
    document.getElementById('app').innerHTML = `
        
        <button onclick="gotoToDoListPage()">Go to your list</button>
        <hr/>

        <h1>This is the add task page</h1>

        <div><input id="personDescription" type="text"/>Person</div>
        <div><input id="taskDescription" type="text"/>Task</div>
        <div></div>
        <div><button onclick="addTask()">Legg til oppgave</button></div>
        <div><input id="datoInput" type="date" onchange="model.dateInput = this.valueAsDate.toLocaleDateString().substr(0,10)"></div> 

    `;
}