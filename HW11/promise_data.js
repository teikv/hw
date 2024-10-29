const apiUrl = 'https://jsonplaceholder.typicode.com/users';

// Hàm lấy tất cả dữ liệu
function fetchAllData() {
    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            renderTable(data);
        })
        .catch(error => {
            console.error('There has been a problem with your fetch operation:', error);
        });
}

// Hàm xóa dữ liệu
function handleDelete(id) {
    fetch(`${apiUrl}/${id}`, {
        method: 'DELETE'
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();
    })
    .then(() => {
        fetchAllData();
    })
    .catch(error => {
        console.error('There has been a problem with your fetch operation:', error);
    });
}

// Hiển thị danh sách người dùng và tổng số người dùng
function renderTable(data) {
    const userTableBody = document.getElementById("userTableBody");
    const userCount = document.getElementById("userCount");
    userTableBody.innerHTML = "";
    data.forEach(item => {
        userTableBody.innerHTML += `
            <tr>
                <td>${item.id}</td>
                <td>${item.name}</td>
                <td>${item.email}</td>
            </tr>
        `;
    });
    userCount.innerText = `Total Users: ${data.length}`;
}

// Lấy và hiển thị danh sách người dùng khi trang được tải
document.addEventListener("DOMContentLoaded", function() {
    fetchAllData();
});