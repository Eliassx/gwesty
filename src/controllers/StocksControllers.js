const Stocks = require('../models/Stocks');

module.exports = class StocksControllers {
    static async stocks(request, response){
        const stocks = await Stocks.findAll({ raw: true });

        return response.render('stocks/stocks', { stocks });
    }

    static stocksInclude(request, response){
        return response.render('stocks/stocksInclude');
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