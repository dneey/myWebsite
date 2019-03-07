export class Contact {
    msisdn: string;
    name: string;
    email: string;

    constructor() {
        this.msisdn = '233 54 994 0617';
        this.name = 'David Nee Yartey';
        this.email = 'yarteyd@gmail.com';
    }

    getContactDetails() {
        return {
            'name' : this.name,
            'email' : this.email,
            'msisdn' : this.msisdn
        };
    }
}
