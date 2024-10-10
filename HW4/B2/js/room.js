var room = [
    {
        id:"P1",
        name:"Superior Room",
        img : "spr.png",
        bed: "1 giường đơn",
        floor: "Tầng 1",
        price:122000,
    },
    {
        id:"P2",
        name:"Deluxe Room",
        img : "dlx.png",
        bed: "2 giường đơn",
        floor: "Tầng 2",
        price:400000,
    },
    {
        id:"P3",
        name:"Suite Room",
        img : "suite.png",
        bed: "2 giường đôi",
        floor: "Tầng 3",
        price:350000,
    },
];

// đẩy mảng room vào local
function Save(){
    localStorage.setItem('listRoom', JSON.stringify(room));
}

// lấy sản phẩm 
function load(){
    room = JSON.parse(localStorage.getItem('listRoom'));
}

// xuất sản phẩm ra html
if (localStorage.getItem("listRoom") != null) {
    load();
}
Save();

var listLocal = function(){
    var listroom = "";
    for (var i in room){
        var data = JSON.parse(JSON.stringify(room[i]));
        var listroom = '<div class="col-lg-3 col-md-6 col-sm-6 col-6 mt-3">';
        listroom += '<div class="card room p-2" style="width:auto">';
        listroom += '<img class="card-img-top" src="img/' + data.img +'" alt="...">';
        listroom += '<div class="card-title room-title text-center h5">' + data.name + '</div>';
        listroom += '<div class="bed text-center h6">' + data.bed + '</div>';
        listroom += '<div class="floor text-center h6">' + data.floor + '</div>';
        listroom += '<div class="price text-center h6">' + data.price + '₫</div>';
        listroom += '<span class="text-center detail-room btn btn-outline-warning" data-id="' + data.id + '" data-name="' + data.name + '" data-img="' + data.img + '" data-bed="' + data.bed + '" data-floor="' + data.floor + '" data-price="' + data.price + '" onclick="detailRoom()">';
        listroom += '<span class="text-center add-to-cart btn btn-outline-warning add-cart" data-id="' + data.id + '" data-name="' + data.name + '" data-img="' + data.img + '" data-bed="' + data.bed + '" data-floor="' + data.floor + '" data-price="' + data.price + '" onclick="tks()">';
        listroom += '<a>';
        listroom += '<i class="fas fa-cart-plus"></i>';
        listroom += '</a>';
        listroom += '</span>';
        listroom += '</div>';
        listroom += '</div>';

        document.getElementById("banchay").innerHTML += listroom;
    }
    Save();
}

listLocal();