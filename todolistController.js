
// Controller
function gotoAddTaskPage()
{
    model.app.currentpage = 'addTask';
    updateView();
}

let taskDescriptionInput = document.getElementById('taskDescription')
let personDescriptionInput = document.getElementById('personDescription');

function addTask() {
    model.tasks.push({
        person: personDescriptionInput.value,
        description: taskDescriptionInput.value,
        d: model.dateInput,

        isDone: false
    });
    taskDescriptionInput.value = '';
    personDescriptionInput.value = '';
    updateView();
}

function updateTask(index) 
{
    let idPers = `editPerson${index}`;
    let idDesc = `editDescription${index}`;
    let idDato = `editDate${index}`;

    let datoInput = document.getElementById(idDato);
    let inputTag = document.getElementById(idPers);
    let inputTag2 = document.getElementById(idDesc);

    const task = model.tasks[index];

    task.person = inputTag.value; 
    task.description = inputTag2.value;
    task.d = datoInput.value;
    
    task.editMode = false;

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

function editTask(index) 
{
    model.tasks[index].editMode = true;
    updateView();
}