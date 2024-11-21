const express = require("express");
const app = express();
const connectDB = require("./configs/database");
const router = require("./routers");
const setupRoutes = require('./routers/index'); // Import router


app.use(express.json());
app.use(express.urlencoded({extended: true}));

// Cấu hình EJS làm template engine
app.set('view engine', 'ejs');
app.set('views', './views'); // Đường dẫn đến thư mục views

// Gọi hàm setupRoutes và truyền đối tượng app vào
setupRoutes(app); // Thiết lập các route

connectDB();
router(app);

app.listen(3000, ()=>{
    console.log("Server run at port 3000");
})