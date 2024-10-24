// Hàm gọi API để lấy dữ liệu sản phẩm
function getProducts(callback) {
    fetch('https://656d3ffbbcc5618d3c22ee91.mockapi.io/product')
    .then(response => response.json())
    .then(data => callback(null, data))
    .catch(error => callback(error, null));
    }
    
    // Callback function để xử lý kết quả trả về từ API
    function handleProducts(error, data) {
    if (error) {
    console.error('Lỗi khi lấy dữ liệu sản phẩm:', error);
    } else {
    const productTableBody = document.getElementById('productTableBody');
    data.forEach(product => {
    const row = `<tr>
    <td>${product.id}</td>
    <td>${product.name}</td>
    <td>${product.price}</td>
    </tr>`;
    productTableBody.innerHTML += row;
    });
    }
    }
    
    // Gọi hàm getProducts với callback handleProducts
    getProducts(handleProducts);