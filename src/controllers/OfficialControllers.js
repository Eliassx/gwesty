const Official = require('../models/Official');

module.exports = class OfficialControllers {
    static login(request, response) {
        return response.render('login');
    }

    static async loginPost(request, response) {
        const { name, email, password } = request.body;

        try {
            const createOffice = await Official.create({
                name,
                email,
                password
            });

            return response.redirect('/home');
        } catch (error){
            console.error(error);
        }
    }
}