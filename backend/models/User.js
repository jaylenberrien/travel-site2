const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const validator = require('validator')

const Schema = mongoose.Schema

const userSchema = new Schema ({
    username:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    },
    trip:[{
        type: mongoose.Types.ObjectId,
        ref: 'trip'
    }]
    }, {timestamps: true})


    //static signup
    // we are making our own method

    userSchema.statics.signup = async function (username, password) {
        // validation
        if(!username || !password){
            throw Error("All fields must be filled")
        }
        //you can check to see if something is a real email with the validator
        if(!validator.isStrongPassword(password)){
            throw Error('Password is weak')
        }

        const exists = await this.findOne({username})
        if (exists){
            throw Error("User already exist")
        }

        const salt = await bcrypt.genSalt(10)
        const hash = await bcrypt.hash(password, salt)

        const user = await this.create({
            username,
            password: hash
        })
        //we are adding salt which is extra characters before the hash, for more security
        return user

    }

    // static login method 

    userSchema.statics.login = async function(username, password){
        if(!username || !password){
            throw Error("All fields must be filled")
        }

        const user = await this.findOne({ username })

        if(!user){
            throw Error('Incorrect username')
        }

        const match = await bcrypt.compare(password, user.password)

        if (!match){
            throw Error('Incorrect password')
        }

        return user
    }


    const User = mongoose.model('User', userSchema)

    module.exports = User;