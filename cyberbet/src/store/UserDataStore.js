import {makeAutoObservable} from "mobx";

export default class UserDataStore {
    get countWin() {
        return this._countWin;
    }

    setCountWin(value) {
        this._countWin = value;
    }

    get countLoss() {
        return this._countLoss;
    }

    setCountLoss(value) {
        this._countLoss = value;
    }
    get userWinOpp() {
        return this._userWinOpp;
    }

    setUserWinOpp(value) {
        this._userWinOpp = value;
    }

    get oppWinUser() {
        return this._oppWinUser;
    }

    setOppWinUser(value) {
        this._oppWinUser = value;
    }
    get userWin() {
        return this._userWin;
    }

    setUserWin(value) {
        this._userWin = value;
    }

    constructor() {
        this._userData = []
        this._userWin = []
        this._userWinOpp = [];
        this._oppWinUser = [];
        this._countWin = 0;
        this._countLoss = 0;
        makeAutoObservable(this)
    }

    get userData() {
        return this._userData;
    }

    setUserData(value) {
        this._userData = value;
    }

}
