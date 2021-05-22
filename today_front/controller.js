import { async } from 'regenerator-runtime';

const taskContainer = document.querySelector('.task_Div');

const successMessage = document.querySelector('.messageSuccess');

const url = 'https://today-task.herokuapp.com/todo/v1/todos'
export const getTask = async () => {
     await fetch(url)
    .then((response) =>{
        return response.json()
    })
    .then((data) =>{
        const alltask = (item, index) =>{
            const html = `
            <div class="allTasks">
                <ul >
                    <li>
                    <strong>${index + 1}:  ${item.title}</strong><br>
                    <span class="status">Status: <i>${item.Status}</i></span><br>
                    <span class="status">Subtasks: <i>${item.subtasks}</i></span><br>
                    <span class="status">Time: <i class="time">${item.created_Date}</i></span><br>
                    <button class="addTask" id="editTask">Edit Your Task</button>
                    <input type="text" value ="${item._id}">
                    </li>
                </ul>
            </div>
            <div class="subtasks">
            </div>
            
            `;
            taskContainer.insertAdjacentHTML('beforeend', html);

        }
        const taskArr = data.alltasks;
        taskArr.forEach(alltask);
    })
    .catch(err => console.log(err));
}  

export const addTask = async ( addtask) => {
    const addtaskButton = document.getElementById('addTask');

    addtaskButton.addEventListener('click', async () => {
        const TaskInput = document.getElementById("Input").value;
        await fetch('https://today-task.herokuapp.com/todo/v1/todo', {
            method: 'POST',
            body: JSON.stringify({
                title: TaskInput
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8'
            }
        })
        .then((response) => {
            if (response.ok) {
                return response.json();
            }
            return Promise.reject(response);
        })
        .then((data) => {
            console.log(data);
          successMessage.innerHTML = "Congratulation Your Task successful created Well"

        })
        .catch((error) => {
            console.warn('Something went wrong.', error);
        });
        
    })

}

// export const ediTask = async () => {
//     // const editbtn = document.getElementById('editTask');
//     // getTask(editbtn).addEventListener('click', (e) => {
//     //     e.preventDefault();
//     //     console.log(editbtn)
//     // })
 
// }

getTask();
addTask();
