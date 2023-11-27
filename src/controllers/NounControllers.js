const Noun = require('../models/Noun');

module.exports = class NounControllers {
    static noun(request, response){
        return response.render('noun/noun');
    }

    static nounIncludes(request, response){
        return response.render('noun/nounInclude');
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