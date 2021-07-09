function updateViewaddTask()
{
    document.getElementById('app').innerHTML = `
        
    <button onclick="gotoToDoListPage()">Go back to your list</button>
    <hr/>

    <h2>Please enter the following information</h2>

    <div id="addTaskDiv">
        <div> Who is the lucky person? </div>
        <input type="text" oninput = "model.personInput = this.value" />
        <div> What is the task? </div> 
        <input type="text" oninput = "model.taskInput = this.value" /> 
        <div> When does it need to be done? </div>
        <input id="datoInput" type="date" onchange = "model.dateInput = this.valueAsDate.toLocaleDateString().substr(0,10)">
        <button onclick="addTask()">Register new task!</button>
    </div>
    `;
}