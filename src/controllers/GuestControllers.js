const Guest = require('../models/Guest');
const Official = require('../models/Official');

module.exports = class GuestsControllers {
    static async guest(request, response) {
        const official = await Official.findAll({ raw: true });

        return response.render('guests/guests', { official });
    }

    static async guestPost(request, response){
        const { name, email, cellphone, cpf, genre } = request.body

        try {
            const createGuest = await Guest.create({
                name,
                email,
                cellphone,
                cpf,
                genre
            })

            return response.redirect('/guests')
        } catch(error) {
            console.error(error)
        }
    }
}