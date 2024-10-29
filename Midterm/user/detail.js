const apiURL = "https://6719eefcacf9aa94f6a8663b.mockapi.io/users";

// Lấy ID từ URL
const urlParams = new URLSearchParams(window.location.search);
const userId = urlParams.get('id');

// Hàm lấy thông tin chi tiết người dùng
function fetchUserDetails(id) {
    fetch(`${apiURL}/${id}`)
        .then(response => response.json())
        .then(data => {
            renderUserDetails(data);
        })
        .catch(error => console.error("Error fetching user details: ", error));
}

// Hàm hiển thị thông tin chi tiết người dùng
function renderUserDetails(user) {
    const userDetails = document.getElementById("userDetails");
    userDetails.innerHTML = `
        <div class="card">
            <img src="${user.avatar}" class="card-img-top" alt="${user.name}">
            <div class="card-body">
                <h5 class="card-title">${user.name}</h5>
                <p class="card-text">Job: ${user.job}</p>
                <p class="card-text">Job Detail: ${user.job_detail}</p>
                <p class="card-text">Email: ${user.email}</p>
                <p class="card-text">Phone: ${user.phone}</p>
                <p class="card-text">Address: ${user.address}</p>
            </div>
        </div>
    `;
}

// Lấy và hiển thị thông tin chi tiết người dùng khi trang được tải
document.addEventListener("DOMContentLoaded", function() {
    fetchUserDetails(userId);
});