const autoBind = require('auto-bind');
const authService = require('./auth.service');

class AuthController {
    #service
    constructor() {
        autoBind(this)
        this.#service = authService
    }
    async sendOTP(req,res) {
        try {
            
        } catch (error) {
            
        }
       
    }

    async checkOTP(req,res) {
        try {
            
        } catch (error) {
            
        }
    }

}



module.exports = new AuthController()