require("dotenv").config();

module.exports = {
    create_secret(){
        return process.env.JWT_SECRET;
    }
}