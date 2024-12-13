const userModel = require('../models/user.model');

module.exports.createUser = async({
    firstname,lastname,email,password
})=>{
    if(!firstname || !email || !password){
        throw new Error('All fields are required');
    }

    //if user doesn't exist then we will create new one
    const user = userModel.create({
        fullname:{
            firstname,
            lastname
        },
         email,
         password
    });

    return user;
}
