"use strict";
const log = console.log;
class FavFood {
    static getFavFood() {
        throw new Error("Method not implemented.");
    }
    constructor(message, user) {
        this.message = message;
        this.user = user;
    }
    getFavFood() {
        return `${this.user} likes ${this.message}!`;
    }
}
let favFood = new FavFood('meat', 'John');
log(favFood.getFavFood());
