const Stocks = require('../models/Stocks');
const Official = require('../models/Official');

module.exports = class StocksControllers {
    static async stocks(request, response){
        const stocks = await Stocks.findAll({ raw: true });
        const official = await Official.findAll({ raw: true });

        return response.render('stocks/stocks', { stocks, official });
    }

    static async stocksInclude(request, response){
        const official = await Official.findAll({ raw: true });

        return response.render('stocks/stocksInclude', { official });
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