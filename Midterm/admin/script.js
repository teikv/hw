const apiURL = "https://6719eefcacf9aa94f6a8663b.mockapi.io/users";
let users = [];

document.addEventListener("DOMContentLoaded", fetchUsers);

// Fetch users from API
function fetchUsers() {
    fetch(apiURL)
        .then(response => response.json())
        .then(data => {
            users = data;
            displayUsers(users);
        })
        .catch(error => console.error("Error fetching users: ", error));
}

// Display users in table format
function displayUsers(userList) {
    const userTableBody = document.getElementById('user-table-body');
    userTableBody.innerHTML = '';

    userList.forEach(user => {
        const userRow = document.createElement('tr');
        userRow.innerHTML = `
            <td>${user.id}</td>
            <td>${user.name}</td>
            <td>${user.job}</td>
            <td>
                <button class="btn btn-info btn-sm" onclick="editUser(${user.id})">Edit</button>
                <button class="btn btn-danger btn-sm" onclick="deleteUser(${user.id})">Delete</button>
            </td>
        `;
        userTableBody.appendChild(userRow);
    });
}

// Open modal to add a new user
function addUser() {
    document.getElementById('userForm').reset();
    document.getElementById('userId').value = '';
    $('#userModal').modal('show');
}

// Open modal to edit an existing user
function editUser(id) {
    const user = users.find(u => u.id === id);
    document.getElementById('userName').value = user.name;
    document.getElementById('userEmail').value = user.job;
    document.getElementById('userId').value = user.id;
    $('#userModal').modal('show');
}

// Save user (add or edit)
function saveUser() {
    const name = document.getElementById('userName').value;
    const job = document.getElementById('userEmail').value; // change 'userEmail' to represent job input
    const id = document.getElementById('userId').value;

    const user = { name, job };

    if (id) {
        // Update user
        fetch(`${apiURL}/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(user)
        })
        .then(response => response.json())
        .then(() => {
            fetchUsers();
            $('#userModal').modal('hide');
        });
    } else {
        // Add new user
        fetch(apiURL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(user)
        })
        .then(response => response.json())
        .then(() => {
            fetchUsers();
            $('#userModal').modal('hide');
        });
    }
}

// Delete user
function deleteUser(id) {
    if (confirm("Are you sure you want to delete this user?")) {
        fetch(`${apiURL}/${id}`, {
            method: 'DELETE'
        })
        .then(() => fetchUsers());
    }
}
