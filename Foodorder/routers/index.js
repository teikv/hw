const categoryRouter = require('./category.router');
const foodRouter = require('./food.router');

module.exports = (app) => {
    app.use('/api/categories', categoryRouter); // Sử dụng categoryRouter với prefix
    app.use('/api/food', foodRouter); // Sử dụng foodRouter với prefix

    // Route để hiển thị trang chính
    app.get('/', (req, res) => {
        res.render('index'); // Render view index.ejs
    });
}
