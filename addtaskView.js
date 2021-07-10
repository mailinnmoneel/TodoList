function updateViewaddTask()
{
    document.getElementById('app').innerHTML = `
        
    <div class="navbar">
        <a href="#Todo" onclick="gotoToDoListPage()"> Todo list </a>
        <a href="#AddNewTask" onclick="gotoAddTaskPage()"> Add new task </a>
    </div>
       
<form>    
    <div class="container">
        <h1>Register</h1>
        </hr>

        <label for="personName"><b>Who is the lucky person?</b></label>
            <input type="text" placeholder = "${model.message.nameField}" name="persoNname" id="personName" 
            oninput = "model.personInput = this.value"/>

        <label for="Task"><b>What is the task?</b></label>
            <input type="text" placeholder="${model.message.taskField}" name="task" id="task" 
            oninput = "model.taskInput = this.value"/> 
        
        <label for="dueDate"><b>When does it need to be done?</b></label>
        <input id="datoInput" type="date" onchange = "model.dateInput = this.valueAsDate.toLocaleDateString().substr(0,10)">
        ${model.message.dateField}
        <button type="submit" class="registerbtn" onclick="addTask()">Register new task!</button>
    </div>
</form>    <div id="registered"><b>${model.message.registeredField}</b></div>
    
    `;
}
