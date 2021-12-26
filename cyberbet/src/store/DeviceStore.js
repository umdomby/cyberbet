import {makeAutoObservable} from "mobx";

export default class DeviceStore {

    get webSocket() {
        return this._webSocket;
    }

    setWebSocket(value) {
        this._webSocket = value;
    }


    constructor() {
        this._types = []
        this._tableName = false
        this._baseCreatedWin = false
        this._deviceRendering = false
        this._oneOnOne = false
        this._typesStart = []
        this._typesIdNow = []
        this._brands = []
        this._devices = []
        this._selectedType = {}
        this._win = {}
        this._selectedBrand = {}
        this._page = 1
        this._totalCount = 0
        this._limit = 12
        this._webSocket = {}
        makeAutoObservable(this)
    }

    get oneOnOne() {
        return this._oneOnOne;
    }

    setOneOnOne(value) {
        this._oneOnOne = value;
    }

    get deviceRendering() {
        return this._deviceRendering;
    }

    setDeviceRendering(value) {
        this._deviceRendering = value;
    }
    get win() {
        return this._win;
    }

    setWin(value) {
        this._win = value;
    }

    get baseCreatedWin() {
        return this._baseCreatedWin;
    }

    setBaseCreatedWin(value) {
        this._baseCreatedWin = value;
    }
    get tableName() {
        return this._tableName;
    }

    setTableName(value) {
        this._tableName = value;
    }
    get typesIdNow() {
        return this._typesIdNow;
    }

    setTypesIdNow(value) {
        this._typesIdNow = value;
    }

    get typesStart() {
        return this._typesStart;
    }

    setTypesStart(value) {
        this._typesStart = value;
    }

    setTypes(types) {
        this._types = types
    }
    setBrands(brands) {
        this._brands = brands
    }

    setDevices(devices) {
        this._devices = devices
    }

    setSelectedType(type) {
        this.setPage(1)
        this._selectedType = type
    }
    setSelectedBrand(brand) {
        this.setPage(1)
        this._selectedBrand = brand
    }
    setPage(page) {
        this._page = page
    }
    setTotalCount(count) {
        this._totalCount = count
    }
    get types() {
        return this._types
    }
    get brands() {
        return this._brands
    }
    get devices() {
        return this._devices
    }
    get selectedType() {
        return this._selectedType
    }
    get selectedBrand() {
        return this._selectedBrand
    }
    get totalCount() {
        return this._totalCount
    }
    get page() {
        return this._page
    }
    get limit() {
        return this._limit
    }
}
