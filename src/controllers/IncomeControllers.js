// const Income = require('../models/Income');
// const Reserve = require('../models/Reserve');
// const Guest = require('../models/Guest');
// const Comsuption = require('../models/Comsuption');

// module.exports = class IncomeControllers {
//     static async income(request, response) {
//         const income = Income.findAll({ 
//             raw: true,
//             include: [{
//                 attributes: ['pay_value'],
//                 model: Reserve
//             }]
//          })

//         return response.render('income/income')
//     }
// }