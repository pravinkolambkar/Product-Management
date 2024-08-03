export class Product {
    id: number;
    productName: string;
    productPrice: number;
    productCategory: string;
    productUrl: string;
    productDescription: string;

    constructor() {
        this.id = 0;
        this.productName = '';
        this.productPrice = 0;
        this.productCategory = '';
        this.productUrl = '';
        this.productDescription = ''
    }
}

export class User {
    username: string;
    password: string;
    email: string;
    city: string;

    constructor() {
        this.username = '';
        this.password = '';
        this.email = '';
        this.city = '';
    }
}