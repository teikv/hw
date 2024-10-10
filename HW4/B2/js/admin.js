var roomAdmin = function(){
    var listroom1 = "";
    for (var i in room) {
        var data = JSON.parse(JSON.stringify(room[i]));
        var listroom1 = '<tr>';
        listroom1 += '<td>' + data.id + '</td>';
        listroom1 += '<td>' + data.name + '</td>';
        listroom1 += '<td><img src="../img/' + data.img + '" alt="" style="width: 50px;"></td>';
        listroom1 += '<td>' + data.bed + '</td>';
        listroom1 += '<td>' + data.floor + '</td>';
        listroom1 += '<td>' + data.price + '</td>';
        listroom1 += '<td><button onclick="updateRoom(' + i + ')" class="btn btn-outline-danger" data-toggle="modal" data-target="#updateRoom"><i class="fas fa-cogs"></i></button>';
        listroom1 += '<button onclick="deleteRoom(' + i + ')" class="btn ml-1 btn-outline-warning"><i class="fas fa-trash"></i></button>';
        listroom1 += '<button onclick="viewRoomDetails(' + i + ')" class="btn ml-1 btn-outline-info" data-toggle="modal" data-target="#roomDetailsModal"><i class="fas fa-eye"></i></button></td>';
        listroom1 += '</tr>';

        document.getElementById("room-admin").innerHTML += listroom1;
    }
    // Save();
}

function viewRoomDetails(index) {
    var data = room[index];
    document.getElementById('roomDetailsImg').src = '../img/' + data.img;
    document.getElementById('roomDetailsName').innerText = data.name;
    document.getElementById('roomDetailsBed').innerText = data.bed;
    document.getElementById('roomDetailsFloor').innerText = data.floor;
    document.getElementById('roomDetailsPrice').innerText = data.price + '₫';
    $('#roomDetailsModal').modal('show');
}

var addRoom = function(){
    var Room = {
        id: "SP" + parseInt(room.length + 1),
        name: document.getElementById("name").value,
        img: document.getElementById("img").value,
        bed: document.getElementById("bed").value,
        floor: document.getElementById("floor").value,
        price: document.getElementById("price").value
    }
    room.push(Room);
    localStorage.setItem('listRoom', JSON.stringify(room));
    // Save();
    window.location.reload();
}

// Xóa phòng 
var deleteRoom = function(i){
    room.splice(i, 1);
    localStorage.setItem('listRoom', JSON.stringify(room));
    window.location.reload();
}

// Sửa phòng 
var updateRoom = function(i){
    var k = room[i];
    document.getElementById("idd").value = k.id;
    document.getElementById("named").value = k.name;
    document.getElementById("imgd").value = k.img;
    document.getElementById("bedd").value = k.bed;
    document.getElementById("floord").value = k.floor;
    document.getElementById("priced").value = k.price;
    document.getElementById("idd").setAttribute("disabled", "disabled");
    document.getElementById("submitUpdate").innerHTML = '<button class="btn btn-outline-danger mt-3" onclick="submitUpdate(' + i + ')"> Đồng ý</button>'
}

var submitUpdate = function(i){
    var k = room[i];
    k.id = document.getElementById("idd").value;
    k.name = document.getElementById("named").value;
    k.img = document.getElementById("imgd").value;
    k.bed = document.getElementById("bedd").value;
    k.floor = document.getElementById("floord").value;
    k.price = document.getElementById("priced").value;
    localStorage.setItem('listRoom', JSON.stringify(room));
    window.location.reload();
}

var userAdmin = function(){
    var listroom = "";
    for (var i in user) {
        var data = JSON.parse(JSON.stringify(user[i]));
        var listroom = '<tr>';
        listroom += '<td>' + data.id + '</td>';
        listroom += '<td>' + data.username + '</td>';
        // listroom += '<td><img src="../img/' + data.img + '" alt="" style="width: 50px;"></td>';
        listroom += '<td>' + data.email + '</td>';
        listroom += '<td><button onclick="updateRoom(' + i + ')" class="btn btn-outline-danger" data-toggle="modal" data-target="#updateRoom"><i class="fas fa-cogs"></i></button>';
        listroom += '<button onclick="deleteRoom(' + i + ')" class="btn ml-1 btn-outline-warning"><i class="fas fa-trash"></i></button></td>';
        listroom += '</tr>';

        document.getElementById("user-admin").innerHTML += listroom;
    }
    // Save();
}

roomAdmin();
userAdmin();