const Official = require('../models/Official');
const bcrypt = require('bcryptjs');

module.exports = class OfficialControllers{
    static dashboard(request, response){
        const userData = Official.findAll({ raw: true });

        response.render('dashboard', { userData });
    }

    static products(request, response) {
        response.render('products');
    }

    static registerComsuption(request, response) {
        response.render('comsuption');
    }

    static register(request, response){
        response.render('register');
    }

    static async registerPost(request, response){
        const { name, email, password, office } = request.body;

        const checkUser = await User.findOne({ where: { email: email } });
        if(checkUser) {
            request.flash('message', 'O email inserido já está em uso!');
            response.render('register');
            return
        }

        const salt = bcrypt.genSaltSync(10);
        const hashedPassword = bcrypt.hashSync(password, salt);

        const user = {
            name,
            email,
            password: hashedPassword,
            office
        }

        try {
            const createUser = await User.create(user);
            request.session.userId = createUser.id;
            request.session.save(() => {
                return response.redirect('/home');
            });
        } catch (error) {
            console.error(error);
        }
    }
}