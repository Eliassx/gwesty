const Comsuption = require('../models/Comsuption');

module.exports = class ComsuptionControllers{
    static async comsuption(request, response) {
        const comsuption = await Comsuption.findAll({ raw: true });

        return response.render('comsuption/comsuption', { comsuption });
    }

    static comsuptioninclude(request, response) {
        return response.render('comsuption/comsuptionInclude');
    }

    static async comsuptionPost(request, response) {
        const { product, quantity, service } = request.body;

        try {
            const createComsuption = Comsuption.create({
                product,
                quantity,
                service
            })
        } catch (error) {
            console.error(error);
        }
    }
}