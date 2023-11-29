const Noun = require('../models/Noun');
const Official = require('../models/Official');


module.exports = class NounControllers {
    static async noun(request, response){
        const noun = await Noun.findAll({ raw: true });
        const official = await Official.findAll({ raw: true });

        return response.render('noun/noun', { noun, official });
    }

    static async nounIncludes(request, response){
        const official = await Official.findAll({ raw: true });

        return response.render('noun/nounInclude', { official });
    }

    static async nounPost(request, response) {
        const { description, ramal_noun, capacity, type, obs } = request.body;

        try {
            const createNoun = Noun.create({
                description,
                ramal_noun,
                capacity,
                type,
                obs
            });

            return response.redirect('/noun')
        } catch (error) {
            console.error(error)
        }
    }

}