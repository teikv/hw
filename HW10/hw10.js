document.addEventListener('DOMContentLoaded', function() {
    const apiUrl = 'https://6719eefcacf9aa94f6a8663b.mockapi.io/place';
    const tableBody = document.getElementById('productTableBody');

    // Fetch and display data
    async function fetchData() {
        const response = await fetch(apiUrl);
        const data = await response.json();
        displayData(data);
    }

    function displayData(data) {
        tableBody.innerHTML = '';
        data.forEach(item => {
            const row = `
                <tr>
                    <td>${item.id}</td>
                    <td>${item.name}</td>
                    <td><img src="${item.image}" alt="${item.name}" width="100"></td>
                    <td>
                        <button class="btn btn-warning btn-sm" onclick="editItem(${item.id})">Edit</button>
                        <button class="btn btn-danger btn-sm" onclick="deleteItem(${item.id})">Delete</button>
                    </td>
                </tr>
            `;
            tableBody.innerHTML += row;
        });
    }

    fetchData();

    // Add new item
    document.getElementById('addItemForm').addEventListener('submit', async function(event) {
        event.preventDefault();
        const name = document.getElementById('name').value;
        const image = document.getElementById('image').value;

        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, image })
        });

        const newItem = await response.json();
        fetchData();
    });

    // Edit item
    window.editItem = async function(id) {
        const name = prompt('Enter new name:');
        const image = prompt('Enter new image URL:');

        const response = await fetch(`${apiUrl}/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, image })
        });

        const updatedItem = await response.json();
        fetchData();
    };

    // Delete item
    window.deleteItem = async function(id) {
        const response = await fetch(`${apiUrl}/${id}`, {
            method: 'DELETE'
        });

        const result = await response.json();
        fetchData();
    };
});