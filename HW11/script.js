const apiUrl = "https://656d3ffbbcc5618d3c22ee91.mockapi.io/product";

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
function createProduct(data, callback) {
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

// Hiển thị danh sách các sản phẩm dưới dạng card
function renderCards(data) {
    const productCardContainer = document.getElementById("productCardContainer");
    productCardContainer.innerHTML = "";  // Clear previous content

    data.forEach(item => {
        const cardHTML = `
            <div class="col-md-4">
                <div class="card mb-4">
                    <img src="${item.image1 }" class="card-img-top" alt="${item.name}">
                    <div class="card-body">
                        <h5 class="card-title">${item.name}</h5>
                        <p class="card-text"><strong>Price:</strong> $${item.price}</p>
                        <p class="card-text"><strong>Description:</strong> ${item.description}</p>
                        <p class="card-text"><strong>Created At:</strong> ${new Date(item.createdAt).toLocaleDateString()}</p>
                        <p class="card-text"><strong>ID:</strong> ${item.id}</p>
                    </div>
                </div>
            </div>
        `;
        productCardContainer.innerHTML += cardHTML;
    });
}

// Lấy và hiển thị danh sách sản phẩm khi trang được tải
document.addEventListener("DOMContentLoaded", function() {
    fetchAllData(function(err, data) {
        if (err) {
            console.error("Error fetching data:", err);
        } else {
            renderCards(data);
        }
    });
});

// Thêm mới một sản phẩm
document.getElementById("addProductForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const price = document.getElementById("price").value;
    const image = document.getElementById("image1").value;
    const description = "Default description"; // Thêm mô tả mặc định nếu chưa có input form
    const createdAt = new Date().toISOString(); // Lấy thời gian hiện tại

    const newProduct = {
        name: name,
        price: price,
        image: image,
        description: description,
        createdAt: createdAt
    };

    createProduct(newProduct, function(err, data) {
        if (err) {
            console.error("Error creating product:", err);
        } else {
            // Sau khi thêm mới, cập nhật lại danh sách
            fetchAllData(function(err, data) {
                if (err) {
                    console.error("Error fetching data:", err);
                } else {
                    renderCards(data);
                }
            });
        }
    });
});
