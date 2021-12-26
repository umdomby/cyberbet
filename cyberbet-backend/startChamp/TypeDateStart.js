const moment = require('moment', 'moment-precise-range-plugin');
require('moment-precise-range-plugin');
const db = require('../dbPool')

class TypeDateStart {

    constructor(msg) {
        this.message = msg;
    }

    async typeDataStart() {
        const arrayDate = await this.dataFullSort()
        let nearestDate;
        arrayDate.forEach(date => {
            let diff = moment(date).diff(moment(), 'seconds');
            if (diff > 0) {
                if (nearestDate) {
                    if (moment(date).diff(moment(nearestDate), 'seconds') < 0) {
                        nearestDate = date;
                    }
                } else {
                    nearestDate = date;
                }
            }
        });
        return moment(nearestDate).format('YYYY-MM-DD HH:mm:ss')
    }

    async typeDataStartNow() {
        const arrayDate = await this.dataFullSort()
        let dataStart = arrayDate.indexOf(await this.typeDataStart())
        return arrayDate[dataStart - 1]
    }

    async indexSelectTypeNow() {
        const arrayDate = await this.dataFullSort()
        return arrayDate.indexOf(await this.typeDataStart()) - 1
    }

    async dataFullSort(){
        const types = await db.query('SELECT * FROM types')
        var arrayDate = [];
        for (var i in types.rows) {
            arrayDate.push(moment(types.rows[i].name).format('YYYY-MM-DD HH:mm:ss'))
        }
        arrayDate.sort()
        return arrayDate
    }

    async dataHaveFullSort(types){

        var massiveTableBase = []
        var tableBase = await db.query('SELECT table_name FROM information_schema.tables WHERE table_schema=\'public\'')
        for(var i = 0; i < tableBase.rows.length; i++){
            massiveTableBase.push(tableBase.rows[i].table_name)
        }
        var tableName = contains(massiveTableBase, types)
        function contains(arr, elem) {
            for (var i = 0; i < arr.length; i++) {
                if (arr[i] === elem) {
                    return true;
                }
            }
            return false;
        }
        return tableName
    }

    async dataFull(id){
        const types = await db.query('SELECT * FROM types WHERE id = $1', [id])
        return moment(types.rows[0].name).format('YYYY-MM-DD HH:mm:ss')
    }
}

module.exports = new TypeDateStart()
