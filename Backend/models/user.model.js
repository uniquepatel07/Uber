const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");


const userSchema = new mongoose.Schema({
    fullname:{
        firstname:{
            type:String,
            required:true,
            minlengh:[3, 'First name must be at least 3 character long']
        },
        lastname:{
            type:String,
            minlengh:[3, 'last name must be at least 3 character long']
        },

    }, 
    email:{
        type:String,
        required: true,
        unique: true,
        minlengh:[5, 'Email must be at least 5character long'],
    },
    password:{
        type:String,
        required:true,
        select: false,
        
    },
    socketId:{
        type: String,
    }
});

userSchema.method.generateAuthToken = function(){
    const token = jwt.sign({_id:this._id}, process.env.JWT_SECRET)
    return token;
}

userSchema.method.comparePassword = async function(password) {
    return await bcrypt.compare(password, this.password);
}

userSchema.statics.hashPassword = async function (password) {
    return await bcrypt.hash(password, 10);
}

const userModel = mongoose.model('user', userSchema);

module.exports = userModel;