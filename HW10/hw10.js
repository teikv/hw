const apiUrl = 'https://6719eefcacf9aa94f6a8663b.mockapi.io/place';

// Hàm lấy tất cả dữ liệu
function fetchAllData(callback) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', apiUrl, true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                const data = JSON.parse(xhr.responseText);
                callback(null, data);
            } else {
                callback(xhr.statusText, null);
            }
        }
    };
    xhr.send();
}

// Hàm xóa dữ liệu
function handleDelete(id) {
    const xhr = new XMLHttpRequest();
    xhr.open('DELETE', `${apiUrl}/${id}`, true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            fetchAllData(function(err, data) {
                if (err) {
                    console.error("Error fetching data:", err);
                } else {
                    renderTable(data);
                }
            });
        }
    };
    xhr.send();
}

// Hàm cập nhật dữ liệu
function handleEdit(id) {
    const editModal = new bootstrap.Modal(document.getElementById('editModal'));
    document.getElementById('editItemForm').onsubmit = function(event) {
        event.preventDefault();
        const name = document.getElementById('editName').value;
        const image = document.getElementById('editImage').value;
        const data = { name, image };

        const xhr = new XMLHttpRequest();
        xhr.open('PUT', `${apiUrl}/${id}`, true);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4 && xhr.status === 200) {
                fetchAllData(function(err, data) {
                    if (err) {
                        console.error("Error fetching data:", err);
                    } else {
                        renderTable(data);
                        editModal.hide();
                    }
                });
            }
        };
        xhr.send(JSON.stringify(data));
    };

    // Hiển thị modal chỉnh sửa
    editModal.show();
}

// Hiển thị danh sách các địa điểm
function renderTable(data) {
    const productTableBody = document.getElementById("productTableBody");
    productTableBody.innerHTML = "";
    data.forEach(item => {
        productTableBody.innerHTML += `
            <tr>
                <td>${item.id}</td>
                <td>${item.name}</td>
                <td><img src="${item.image}" alt="${item.name}" width="100"></td>
                <td>
                    <button class="btn btn-warning btn-sm" onclick="handleEdit(${item.id})">Edit</button>
                    <button class="btn btn-danger btn-sm" onclick="handleDelete(${item.id})">Delete</button>
                </td>
            </tr>
        `;
    });
}

// Lấy và hiển thị danh sách địa điểm khi trang được tải
document.addEventListener("DOMContentLoaded", function() {
    fetchAllData(function(err, data) {
        if (err) {
            console.error("Error fetching data:", err);
        } else {
            renderTable(data);
        }
    });
});