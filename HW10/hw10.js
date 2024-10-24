const apiUrl = "https://6719eefcacf9aa94f6a8663b.mockapi.io/place";

// Hàm lấy tất cả dữ liệu (Read)
function fetchAllData(callback) {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", apiUrl, true);
    xhr.onload = function() {
        if (xhr.status === 200) {
            callback(null, JSON.parse(xhr.responseText));
        } else {
            callback(xhr.status, null);
        }
    };
    xhr.send();
}

// Hàm thêm dữ liệu mới (Create)
function createItem(data, callback) {
    const xhr = new XMLHttpRequest();
    xhr.open("POST", apiUrl, true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onload = function() {
        if (xhr.status === 201) {
            callback(null, JSON.parse(xhr.responseText));
        } else {
            callback(xhr.status, null);
        }
    };
    xhr.send(JSON.stringify(data));
}

// Hàm xóa dữ liệu (Delete)
function deleteItem(id, callback) {
    const xhr = new XMLHttpRequest();
    xhr.open("DELETE", `${apiUrl}/${id}`, true);
    xhr.onload = function() {
        if (xhr.status === 200) {
            callback(null, JSON.parse(xhr.responseText));
        } else {
            callback(xhr.status, null);
        }
    };
    xhr.send();
}

// Hàm cập nhật dữ liệu (Update)
function updateItem(id, data, callback) {
    const xhr = new XMLHttpRequest();
    xhr.open("PUT", `${apiUrl}/${id}`, true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onload = function() {
        if (xhr.status === 200) {
            callback(null, JSON.parse(xhr.responseText));
        } else {
            callback(xhr.status, null);
        }
    };
    xhr.send(JSON.stringify(data));
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

// Thêm mới một địa điểm
document.getElementById("addItemForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const image = document.getElementById("image").value;

    const newItem = {
        name: name,
        image: image
    };

    createItem(newItem, function(err, data) {
        if (err) {
            console.error("Error creating item:", err);
        } else {
            // Sau khi tạo mới, cập nhật lại danh sách
            fetchAllData(function(err, data) {
                if (err) {
                    console.error("Error fetching data:", err);
                } else {
                    renderTable(data);
                }
            });
        }
    });
});

// Xóa một địa điểm
function handleDelete(id) {
    if (confirm("Are you sure you want to delete this item?")) {
        deleteItem(id, function(err, data) {
            if (err) {
                console.error("Error deleting item:", err);
            } else {
                // Sau khi xóa, cập nhật lại danh sách
                fetchAllData(function(err, data) {
                    if (err) {
                        console.error("Error fetching data:", err);
                    } else {
                        renderTable(data);
                    }
                });
            }
        });
    }
}
