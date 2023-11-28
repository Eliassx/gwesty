const Products = require('../models/Products');

module.exports = class ProductsControllers {
    static home(request, response) {
        return response.render('home')
    }
    
    static async products(request, response) {
        const products = await Products.findAll({ raw: true });

        return response.render('products/products', { products });
    }

    static productsInclude(request, response) {
        return response.render('products/productsInclude');
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