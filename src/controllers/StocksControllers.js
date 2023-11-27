const Stocks = require('../models/Stock');

module.exports = class StocksControllers {
    static stocks(request, response){
        return response.render('stocks');
    }

    static async stocksPost(request, response) {
        const { description, quantity, date_stocks, type, obs } = request.body;

        try {
            const createStocks = Stocks.create({
                description,
                quantity,
                date_stocks,
                type,
                obs
            });

            return response.redirect('/stocks')
        } catch (error) {
            console.error(error)
        }
    }

}