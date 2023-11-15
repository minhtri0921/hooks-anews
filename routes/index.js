const newsRouter = require('./news');
const categoryRouter = require('./category')
const contactRouter = require('./contact')
const contactController = require('../controllers/ContactControllers')

function route(app) {
    app.use('/news', newsRouter);
    app.use('/categories',categoryRouter)
    app.use('/contact',contactRouter,contactController.postContact)

}

module.exports = route;
