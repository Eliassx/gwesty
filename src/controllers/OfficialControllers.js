const Official = require('../models/Official');
const bcrypt = require('bcryptjs');

module.exports = class OfficialControllers{
    static dashboard(request, response){
        response.render('home');
    }

    static async register(request, response){
        response.render('register');
    }

    static async registerPost(request, response){
        const { name, email, password, office} = request.body;

        
    }
}