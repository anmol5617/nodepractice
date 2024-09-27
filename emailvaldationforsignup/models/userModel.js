const mongoose=require('mongoose')
const validator=require('validator')
const UserSchema= new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            
        },
        email: {
            type: String,
            required: true,
            unique: true,
            validate: {
                validator: function(el) {
                    return validator.isEmail(el) && el.endsWith('@electrovese.com');
                },
                //props is an object which is provided by moongose with validator function
                message: props => `${props.value} must be a valid email ending with @electrovese.com!`
            },
        },
        password: {
            type: String,
            required: true,
            minlength: 8, 
        },
        bio: {
            type: String,
            maxlength: 200,
            trim: true,
        },
        profilePicture: {
            type: String, 
            validate: {
                validator: function(v) {
                    return v.match(/\.(jpeg|jpg|png)$/) !== null; // Ensure it's a JPEG or PNG
                },
                message: props => `${props.value} must be a valid image file (JPEG or PNG)!`
            },
        },
    }
)

const User=mongoose.model('User',UserSchema)

module.exports= User