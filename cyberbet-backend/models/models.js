const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, unique: true, autoIncrement: true},
    email: {type: DataTypes.STRING, unique: true},
    password: {type: DataTypes.STRING},
    role: {type: DataTypes.STRING, defaultValue: "USER"},
})

const Userdata = sequelize.define('userdata', {
    id: {type: DataTypes.INTEGER, primaryKey: true, unique: true, autoIncrement: true},
    username: {type: DataTypes.STRING, unique: true},
    user_fund: {type: DataTypes.INTEGER, defaultValue: 0, allowNull: false},
    rating: {type: DataTypes.INTEGER, defaultValue: 0, allowNull: false},
    ratingcy: {type: DataTypes.INTEGER, defaultValue: 0, allowNull: false},
    ratingcymap: {type: DataTypes.INTEGER, defaultValue: 0, allowNull: false},
    twitch: {type: DataTypes.STRING, allowNull: false},
    youtube: {type: DataTypes.STRING, allowNull: false},
    facebook: {type: DataTypes.STRING, allowNull: true},
    instagram: {type: DataTypes.STRING, allowNull: true},
    telegram: {type: DataTypes.STRING, allowNull: true},
    vk: {type: DataTypes.STRING, allowNull: true},
    ok: {type: DataTypes.STRING, allowNull: true},
    img: {type: DataTypes.STRING, allowNull: true},
    promo: {type: DataTypes.STRING, allowNull: true},
    bet: {type: DataTypes.INTEGER, defaultValue: 1000},
    ban: {type: DataTypes.BOOLEAN, defaultValue: false},
    ipreg: {type: DataTypes.STRING, allowNull: true},
    ip: {type: DataTypes.STRING, allowNull: true},
    ipin: {type: DataTypes.TEXT, allowNull: true},

    countWin:{type: DataTypes.INTEGER, defaultValue: 0, allowNull: false},
    countLoss:{type: DataTypes.INTEGER, defaultValue: 0, allowNull: false},
    promoCount:{type: DataTypes.INTEGER, defaultValue: 0, allowNull: false},
    dCyberbet:{type: DataTypes.INTEGER, defaultValue: 0, allowNull: false},
    dTypes:{type: DataTypes.INTEGER, defaultValue: 0, allowNull: false},
    dUsers:{type: DataTypes.INTEGER, defaultValue: 0, allowNull: false},
    pGame:{type: DataTypes.INTEGER, defaultValue: 0, allowNull: false},
    pFund:{type: DataTypes.INTEGER, defaultValue: 0, allowNull: false},
    game:{type: DataTypes.INTEGER, defaultValue: 0, allowNull: false},

})

const Basket = sequelize.define('basket', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

const BasketDevice = sequelize.define('basket_device', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

const Device = sequelize.define('device', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    dev_start: {type: DataTypes.BOOLEAN, allowNull: false, defaultValue: false},
    dev_username: {type: DataTypes.STRING, unique: false, allowNull: false},
    dev_typename: {type: DataTypes.STRING, unique: false, allowNull: false},
    dev_brandname: {type: DataTypes.STRING, unique: false, allowNull: false},
    dev_billid: {type: DataTypes.STRING, unique: false, allowNull: false},
    dev_amount: {type: DataTypes.INTEGER, allowNull: false},
    // nametype: {type: DataTypes.STRING, unique: false, allowNull: false},
    // namebrand: {type: DataTypes.STRING, unique: false, allowNull: false},

    //userdatumId: {type: DataTypes.INTEGER},
    //img: {type: DataTypes.STRING, allowNull: false},

    // price: {type: DataTypes.INTEGER, allowNull: false},
    // rating: {type: DataTypes.INTEGER, defaultValue: 0},
    //userId: {type: DataTypes.INTEGER},
})

const One_on_one = sequelize.define('one_on_one', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    start_status: {type: DataTypes.BOOLEAN, allowNull: true, defaultValue: false},
    username: {type: DataTypes.STRING, unique: false, allowNull: false},
    oppname: {type: DataTypes.STRING, unique: false, defaultValue: ''},
    game: {type: DataTypes.STRING, unique: false, allowNull: false},
    // brand: {type: DataTypes.STRING, unique: false, allowNull: false},
    // billid: {type: DataTypes.STRING, unique: false, allowNull: false},
    description: {type: DataTypes.STRING, unique: false, allowNull: false},
    amount: {type: DataTypes.INTEGER, allowNull: false},
    time: {type: DataTypes.INTEGER, allowNull: false},
    // status_pay: {type: DataTypes.BOOLEAN, unique: false, allowNull: false, defaultValue: false},
    // dateMatch: {type: DataTypes.DATE, unique: false, allowNull: true},
    userCheck: {type: DataTypes.BOOLEAN, defaultValue: false },
    oppCheck: {type: DataTypes.BOOLEAN, defaultValue: false },
    // userTwitch: {type: DataTypes.BOOLEAN, unique: false, defaultValue: true },
    // oppTwitch: {type: DataTypes.BOOLEAN, unique: false, defaultValue: true },
})

const Type = sequelize.define('type', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.DATE, unique: false, allowNull: true},
    nametype: {type: DataTypes.TEXT, unique: true, allowNull: false},
    start: {type: DataTypes.BOOLEAN, unique: false, allowNull: true, defaultValue: null },
    grandprix: {type: DataTypes.BOOLEAN, allowNull: false, defaultValue: false },
    description: {type: DataTypes.STRING, unique: false, allowNull: true},
    amount: {type: DataTypes.INTEGER, allowNull: true},
    fund: {type: DataTypes.INTEGER, defaultValue: 0},
    winner: {type: DataTypes.INTEGER, defaultValue: 0},
})

const Chat = sequelize.define('chat', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    username: {type: DataTypes.STRING, unique: false, allowNull: false},
    message: {type: DataTypes.STRING, unique: false, allowNull: false},
    date: {type: DataTypes.DATE, unique: false, allowNull: true},
})

const Brand = sequelize.define('brand', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    idname: {type: DataTypes.INTEGER, allowNull: true},
    name: {type: DataTypes.STRING, unique: false, allowNull: false},
    brand_description: {type: DataTypes.STRING, unique: false, allowNull: false},
    amount: {type: DataTypes.INTEGER, allowNull: true},
    brand_payment: {type: DataTypes.INTEGER, allowNull: true},
})

const Rating = sequelize.define('rating', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    rating_username: {type: DataTypes.STRING, unique: false, allowNull: false},
    rating_type: {type: DataTypes.STRING, unique: false, allowNull: false},
    rating_brand: {type: DataTypes.STRING, unique: false, allowNull: false},
    rating_rate: {type: DataTypes.INTEGER, allowNull: false},
})

const Rating_map = sequelize.define('rating_map', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    rating_username: {type: DataTypes.STRING, unique: false, allowNull: false},
    rating_type: {type: DataTypes.STRING, unique: false, allowNull: false},
    rating_brand: {type: DataTypes.STRING, unique: false, allowNull: false},
    rating_rate: {type: DataTypes.INTEGER, allowNull: false},
})

const Donate = sequelize.define('donate', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    amount: {type: DataTypes.INTEGER, allowNull: false},
    username: {type: DataTypes.STRING, unique: false, allowNull: false},
    billId: {type: DataTypes.STRING, unique: false, allowNull: false},
    comment: {type: DataTypes.STRING, unique: false, allowNull: true},
    status: {type: DataTypes.BOOLEAN, unique: false, allowNull: false, defaultValue: false},
    nametype: {type: DataTypes.STRING, unique: false, allowNull: true},
    code_transaction: {type: DataTypes.INTEGER, allowNull: true},
    brandName: {type: DataTypes.STRING, unique: false, allowNull: true},
    typeid: {type: DataTypes.INTEGER, allowNull: true},
    brandid: {type: DataTypes.INTEGER, allowNull: true},

})

// const Rating = sequelize.define('rating', {
//     id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
//     rate: {type: DataTypes.INTEGER, allowNull: false},
// })

const DeviceInfo = sequelize.define('device_info', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title: {type: DataTypes.STRING, allowNull: false},
    description: {type: DataTypes.STRING, allowNull: false},
})

const TypeBrand = sequelize.define('type_brand', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

User.hasOne(Userdata)
Userdata.belongsTo(User)

Userdata.hasOne(Donate)
Donate.belongsTo(Userdata)

User.hasOne(Basket)
Basket.belongsTo(User)

User.hasMany(Device)
Device.belongsTo(User)

// Device.hasMany(User)
// User.belongsTo(Device)

Userdata.hasMany(Device)
Device.belongsTo(Userdata)

// User.hasMany(Rating)
// Rating.belongsTo(User)

Basket.hasMany(BasketDevice)
BasketDevice.belongsTo(Basket)

Type.hasMany(Device)
Device.belongsTo(Type)

Brand.hasMany(Device)
Device.belongsTo(Brand)

// Device.hasMany(Rating)
// Rating.belongsTo(Device)

Device.hasMany(BasketDevice)
BasketDevice.belongsTo(Device)

Device.hasMany(DeviceInfo, {as: 'info'});
DeviceInfo.belongsTo(Device)

Type.belongsToMany(Brand, {through: TypeBrand })
Brand.belongsToMany(Type, {through: TypeBrand })

module.exports = {
    User,
    Userdata,
    Basket,
    BasketDevice,
    Device,
    Type,
    Rating,
    Donate,
    Brand,
    TypeBrand,
    DeviceInfo,
    One_on_one,
    Rating_map,
    Chat
}






