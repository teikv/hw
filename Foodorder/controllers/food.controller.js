const foodModel = require('../models/food.model');

module.exports = {
    createFood: async (req, res) => {
        const body = req.body;
        const newFood = await foodModel.create(body);
        return res.status(201).json(newFood);
    },
    getFoods: async (req, res) => {
        const foods = await foodModel.find();
        return res.status(200).json(foods);
    },
    updateFood: async (req, res) => {
        const id = req.params.id;
        const body = req.body;
        const updatedFood = await foodModel.findByIdAndUpdate(id, body, {new: true});
        return res.status(200).json(updatedFood);
    },
    deleteFood: async (req, res) => {
        const id = req.params.id;
        const deleteFood = await foodModel.findByIdAndDelete(id);
        return res.status(200).json(deleteFood);
    }
};
exports.getFoods = async (req, res) => {
    try {
        const foods = await foodModel.find(); // Lấy danh sách foods từ database
        res.render('foods/cards', { foods }); // Render view với danh sách foods
    } catch (error) {
        res.status(500).send(error.message);
    }
};