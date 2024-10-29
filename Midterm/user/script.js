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

// Display users in Bootstrap card format
function displayUsers(userList) {
    const userContainer = document.getElementById('user-list');
    userContainer.innerHTML = '';

    userList.forEach(user => {
        const userCard = document.createElement('div');
        userCard.classList.add('col-md-4');
        userCard.innerHTML = `
            <div class="card text-center">
                <img src="${user.avatar}" class="card-img-top user-card" alt="${user.name}">
                <div class="card-body">
                    <h5 class="card-title">${user.name}</h5>
                    <p class="card-text">${user.job}</p>
                    <small class="text-muted">${user.job_detail}</small>
                    <button class="btn btn-primary mt-2" onclick="viewDetails(${user.id})">Details</button>
                </div>
            </div>
        `;
        userContainer.appendChild(userCard);
    });
}

// Search users by name
function searchUsers() {
    const query = document.getElementById('search').value.toLowerCase();
    const filteredUsers = users.filter(user => user.name.toLowerCase().includes(query));
    displayUsers(filteredUsers);
}

// View details
function viewDetails(id) {
    window.location.href = `detail.html?id=${id}`;
}