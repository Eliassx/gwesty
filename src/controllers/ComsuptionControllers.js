const Comsuption = require('../models/Comsuption');
const Official = require('../models/Official');

module.exports = class ComsuptionControllers{
    static async comsuption(request, response) {
        const comsuption = await Comsuption.findAll({ raw: true });
        const official = await Official.findAll({ raw: true });

        return response.render('comsuption/comsuption', { comsuption, official });
    }

    static async comsuptioninclude(request, response) {
        const official = await Official.findAll({ raw: true });

        return response.render('comsuption/comsuptionInclude', { official });
    }

    static async comsuptionPost(request, response) {
        const { product, quantity, service } = request.body;

        try {
            const createComsuption = Comsuption.create({
                product,
                quantity,
                service
            });

            return response.redirect('/comsuption');
        } catch (error) {
            console.error(error);
        }
    }
}