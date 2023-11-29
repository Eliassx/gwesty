const Reserve = require('../models/Reserve');
const Official = require('../models/Official');

module.exports = class ReserveControllers{
    static async reserve(request, response) {
        const reserve = await Reserve.findAll({ raw: true });
        const official = await Official.findAll({ raw: true });

        return response.render('reserve/reserve', { reserve, official });
    }

    static async reserveInclude(request, response) {
        const official = await Official.findAll({ raw: true });

        return response.render('reserve/reserveInclude', { official });
    }

    static async reservePost(request, response) {
        const { client, noun, quantity, date_reserve, date_confirm, join_provided, leave_provided, join_effective, leave_effective, reserve_value, comsuption_value, anticipation_value, pay_value } = request.body;

        try {
            const createReserve = await Reserve.create({
                client,
                noun,
                quantity,
                date_reserve,
                date_confirm,
                join_provided,
                leave_provided,
                join_effective,
                leave_effective,
                reserve_value,
                comsuption_value,
                anticipation_value,
                pay_value
            });

            return response.redirect('/reserve')
        } catch (error) {
            console.error(error);
        }
    }
}