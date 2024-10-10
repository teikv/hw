function getQueryParam(){
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('code');
}
function displayRoomDetail(){
    const code = getQueryParam('code');

    const rooms = getRoomsFromLocalStorage();
    const room = rooms.find(room => room.id === code);

    if(room){
        const productDetail = document.getElementById('room-detail');
        productDetail.innerHTML = `
            <div class="room-detail">
                <img src="img/${room.img}" alt="${room.name}" style="height:300px;object-fit:cover;">
                <h5 >${room.name}</h5>
                <p >ID phòng: ${room.id}</p>
                <p >Loại phòng: ${room.type}</p>
                <p >Giá: ${room.price}</p>
            </div>
        `;
    }else {
        console.error('Sản phẩm không tồn tại');
    }
}

function getRoomsFromLocalStorage(){
    const rooms = JSON.parse(localStorage.getItem('listRoom'));
    return rooms ? rooms : [];
}

document.addEventListener('DOMContentLoaded', displayRoomDetail);
