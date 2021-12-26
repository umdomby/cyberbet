const {Device, User, Userdata, DeviceInfo} = require('../models/models')
const ApiError = require('../error/ApiError');
const db = require('../dbPool')


class OneOnOneController {

    async create(req, res, next) {
        try {
            // start_status: {type: DataTypes.BOOLEAN, allowNull: true, defaultValue: null},
            // username: {type: DataTypes.STRING, unique: false, allowNull: false},
            // oppname: {type: DataTypes.STRING, unique: false, allowNull: false, defaultValue: ''},
            // game: {type: DataTypes.STRING, unique: false, allowNull: false},
            // brand: {type: DataTypes.STRING, unique: false, allowNull: false},
            // billid: {type: DataTypes.STRING, unique: false, allowNull: false},
            // description: {type: DataTypes.STRING, unique: false, allowNull: false},
            // amount: {type: DataTypes.INTEGER, allowNull: false},
            // day: {type: DataTypes.INTEGER, allowNull: false},
            // status_pay: {type: DataTypes.BOOLEAN, unique: false, allowNull: false, defaultValue: false},
            // dateMatch: {type: DataTypes.DATE, unique: false, allowNull: true},
            // userCheck: {type: DataTypes.BOOLEAN, allowNull: false, defaultValue: false },
            // oppCheck: {type: DataTypes.BOOLEAN, allowNull: false, defaultValue: false },
            // userTwitch: {type: DataTypes.BOOLEAN, unique: false, defaultValue: true },
            // oppTwitch: {type: DataTypes.BOOLEAN, unique: false, defaultValue: true },


            let {username, game, brand, one_description, one_amount, one_day} = req.body
            function pass_gen() {
                const chrs = '0123456789qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM';
                var str = '';
                for (var i = 0; i < 7; i++) {
                    var pos = Math.floor(Math.random() * chrs.length);
                    str += chrs.substring(pos, pos+1);
                }
                return str;
            }
            const one_billId = pass_gen() + "-" + pass_gen() + "-" + pass_gen()
            const device = await Device.create({ one_username, one_game, one_brand, day, one_description, one_amount, one_billId});
            return res.json(device)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }
}

module.exports = new OneOnOneController()
