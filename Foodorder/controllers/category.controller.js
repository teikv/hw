// Import category model
const categoryModel = require('../models/category.model');

module.exports = {
    createCategory: async (req, res) => {
        const body = req.body;
        const newCategory = await categoryModel.create(body);
        return res.status(201).json(newCategory);
    },
    getCategories: async (req, res) => {
        const categories = await categoryModel.find();
        return res.status(200).json(categories);
    },
    updateCategory: async (req, res) => {
        const id = req.params.id;
        const body = req.body;
        const updatedCategory = await categoryModel.findByIdAndUpdate(id, body, {new: true});
        return res.status(200).json(updatedCategory);
    },
    deleteCategory: async (req, res) => {
        const id = req.params.id;
        const deleteCategory = await categoryModel.findByIdAndDelete(id);
        return res.status(200).json(deleteCategory);
    }
};
exports.getCategories = async (req, res) => {
    try {
        const categories = await categoryModel.find(); // Lấy danh sách categories từ database
        res.render('categories/cards', { categories }); // Render view với danh sách categories
    } catch (error) {
        res.status(500).send(error.message);
    }
};
