const log = console.log;

class FavFood {
    static getFavFood(): any {
        throw new Error("Method not implemented.");
    }
    message: string;
    user: string;
    constructor(message: string, user:string) {
        this.message = message;
        this.user = user;
    }

    getFavFood() {
        return `${this.user} likes ${this.message}!`;
    }
}

let favFood = new FavFood('meat', 'John');

log(favFood.getFavFood());