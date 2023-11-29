const Services = require('../models/Services');
const Official = require('../models/Official');

module.exports = class ServicesControllers {
    static async service(request, response){
        const services = await Services.findAll({ raw: true });
        const official = await Official.findAll({ raw: true });

        return response.render('servicess/services', { services, official });
    }

    static async serviceInclude(request, response){
        const official = await Official.findAll({ raw: true });

        return response.render('servicess/servicesInclude', { official });
    }

    static async servicePost(request, response) {
        const { description, quantity, valor, obs } = request.body;

        try {
            const createService = Services.create({
                description,
                quantity,
                valor,
                obs
            });

            return response.redirect('/services')
        } catch (error) {
            console.error(error)
        }
    }

}