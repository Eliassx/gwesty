const Services = require('../models/Services');

module.exports = class ServicesControllers {
    static service(request, response){
        return response.render('services');
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