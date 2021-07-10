
// Controller
function gotoAddTaskPage()
{
    model.app.currentpage = 'addTask';
    updateView();
}

function updateTask(index) 
{   
    if (emptypersonInput() == true) { alert("Please add a name!"); return; }
    if (emptytaskInput() == true) { alert("Please add a task!"); return; }
    if (emptydateInput() == true) { alert("Please add a duedate!"); return; }
    const task = model.tasks[index];
   
    task.description = model.taskInput;
    task.person = model.personInput; 
    task.date = model.dateInput;
    
    task.editMode = false;

    updateView();
}

function editTask(index) 
{
    model.tasks[index].editMode = true;
    updateView();
}

function changeIsDone(checkbox, index) 
{  
    model.tasks[index].isDone = checkbox.checked;

    updateView();
} 

function deleteTask(index) 
{
    model.tasks.splice(index, 1);
    updateView();
}
