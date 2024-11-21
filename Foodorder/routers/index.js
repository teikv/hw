const express = require("express");
const router = express.Router();

const categoryRouter = require('./category.router');
const categoryController = require("../controllers/category.controller");

// Route GET để lấy danh sách categories
router.get("/api/categories", categoryController.getCategories);

// Route POST để tạo mới một category
router.post("/api/categories", categoryController.createCategory);

// Route PATCH để cập nhật một category theo ID
router.patch("/api/categories/:id", categoryController.updateCategory);

// Route DELETE để xóa một category theo ID (nếu cần)
router.delete("/api/categories/:id", categoryController.deleteCategory);

module.exports = (app) => {
    app.use('/api/categories', categoryRouter); // Sử dụng categoryRouter với prefix

    // Route để hiển thị trang chính
    app.get('/', (req, res) => {
        res.render('index'); // Render view index.ejs
    });
}