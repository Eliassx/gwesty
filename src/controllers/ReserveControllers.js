const Reserve = require('../models/Reserve');

module.exports = class ReserveControllers{
    static async reserve(request, response) {
        const reserve = await Reserve.findAll({ raw: true })

        return response.render('reserve/reserve', { reserve });
    }

    static reserveInclude(request, response) {
        return response.render('reserve/reserveInclude');

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