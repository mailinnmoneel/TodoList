function gotoToDoListPage()
{
    model.app.currentpage = 'todolist';
    updateView();
}

function addTask() {
    
    if (emptypersonInput() == true) { alert("Please add a name!"); return; }
    if (emptytaskInput() == true) { alert("Please add a task!"); return; }
    if (emptydateInput() == true) { alert("Please add a duedate!"); return; }
    
    model.tasks.push({
        person: model.personInput,
        description: model.taskInput,
        date: model.dateInput,

        isDone: false
    });
    alert('New task was added to your list!');
    updateView();
    addTaskReset();
}

function emptypersonInput()
{
    return model.personInput === null || model.personInput.match(/^ *$/) !== null;
}

function emptytaskInput()
{
    return model.taskInput === null || model.taskInput.match(/^ *$/) !== null;
}

function emptydateInput()
{
    return model.dateInput === null || model.dateInput.match(/^ *$/) !== null;
}

function addTaskReset() 
{
    model.personInput = null;
    model.taskInput = null;
    model.dateInput = null;
}