const userModel = require('../models/user-model')

const getAllUser = async (req, res) => {
    try {
        const users = userModel.getAllUser()
        if(!users) res.json({message:'User Not Found'})
            res.json(users)
        } 
        catch (error) {
        console.log(error);
        res.json({message:'Error get All users'})
    }
}

module.exports ={getAllUser}