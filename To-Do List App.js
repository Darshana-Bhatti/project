document.addEventListener('DOMContentLoaded',function(){
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');
    window.addTask = function(){
        if(taskInput.value.trim() !==""){
            const newTask = document.createElement('li');
            newTask.innerHTML='<span>'+taskInput.value+'</span> <button onclick="removeTask(this)">Remove</button>';
            taskList.appendChild(newTask);
            taskInput.value="";
        }else{
            alert('Please, Enter a valid task!');
        }
    }
    window.removeTask = function (button){
        const taskToRemove = button.parentNode;
        taskToRemove.parentNode.removeChild(taskToRemove);
    }
    })