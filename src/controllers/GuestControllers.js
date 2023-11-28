const Guest = require('../models/Guest');

module.exports = class GuestsControllers {
    static guest(request, response) {
        return response.render('guests/guests');
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