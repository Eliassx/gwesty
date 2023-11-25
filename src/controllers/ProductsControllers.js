const Products = require('../models/Products');

module.exports = class ServicesControllers {
    static products(request, response){
        return response.render('products');
    }

    static async productsPost(request, response) {
        const { description, type, date_products, valor, obs } = request.body;

        try {
            const createService = Products.create({
                description,
                type,
                date_products,
                valor,
                obs
            });

            return response.redirect('/home')
        } catch (error) {
            console.error(error)
        }
    }

}