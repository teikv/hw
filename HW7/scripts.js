async function fetchTodos() {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    const data = await response.json();
    displayTodos(data);
}

function displayTodos(todos) {
    const container = document.getElementById('card-container');
    container.innerHTML = '';

    todos.forEach(todo => {
        const card = `
            <div class="col-lg-4 col-md-6 col-sm-12 mb-4">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Todo ID: ${todo.id}</h5>
                        <p class="card-text">User ID: ${todo.userId}</p>
                        <p class="card-text">Title: ${todo.title}</p>
                        <p class="card-text">Completed: ${todo.completed ? 'Yes' : 'No'}</p>
                    </div>
                </div>
            </div>
        `;
        container.innerHTML += card;
    });
}
fetchTodos();