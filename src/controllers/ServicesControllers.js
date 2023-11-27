const Services = require('../models/Services');

module.exports = class ServicesControllers {
    static service(request, response){
        return response.render('servicess/services');
    }

    static serviceInclude(request, response){
        return response.render('servicess/servicesInclude');
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