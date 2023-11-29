const Products = require('../models/Products');
const Official = require('../models/Official');

module.exports = class ProductsControllers {
    static async home(request, response) {
        const official = await Official.findAll({ raw: true });


        return response.render('home', { official });
    }
    
    static async products(request, response) {
        const products = await Products.findAll({ raw: true });
        const official = await Official.findAll({ raw: true });

        return response.render('products/products', { products, official });
    }

    static async productsInclude(request, response) {
        const official = await Official.findAll({ raw: true });

        return response.render('products/productsInclude', { official });
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
            },{

            });

            return response.redirect('/products')
        } catch (error) {
            console.error(error)
        }
    }

}