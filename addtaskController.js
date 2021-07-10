function gotoToDoListPage()
{
    model.app.currentpage = 'todolist';
    updateView();
}

function addTask() {
    
    if (emptypersonInput() == true) { model.message.nameField = "Please enter a name to register new task!" ; updateView(); }
    if (emptytaskInput() == true) { model.message.taskField = "Please enter a task description!"; updateView(); }
    if (emptydateInput() == true) { model.message.dateField = "Please enter a duedate!"; updateView(); return; }
    
    model.tasks.push({
        person: model.personInput,
        description: model.taskInput,
        date: model.dateInput,

        isDone: false
    });
    model.message.registeredField = "New task was succesfully added!";
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
    setTimeout(function() {
        model.personInput = null;
        model.taskInput = null;
        model.dateInput = null;

        model.message.nameField = "Enter Name";
        model.message.taskField = "Enter Task";
        model.message.dateField = " ";

        model.message.registeredField = " ";
    
        updateView();

    }, 3000);

    
}