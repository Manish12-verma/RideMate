const mongoose = require('mongoose');   
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');


const captainSchema = new mongoose.Schema({
    fullname:{
        firstname:{
            type: String,
            required: true,
            minlen :[3,'First name must be at least 3 characters']
        },
        lastname:{
            type: String,  
            minlen :[3,'Last name must be at least 3 characters']    
        }
    },
    email:{
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        match: [/\S+@\S+\.\S+/, 'Please enter a valid email']
    },
    password:{
        type: String,
        required: true,
        select:false,
    },
    socketId:{
        type: String
    },
   status:{
    type: String,
    enum:['active','inactive'],
    default:'inactive'
   },
   vehicle:{
       color:{
         type: String,
         required: true,
         minlen :[3,'Color must be at least 3 characters']
       },
       plate:{
        type: String,
        required: true,
        unique: true,
        minlen :[3,'Plate must be at least 3 characters']
       },
       capacity:{
        type: Number,
        required: true,
        minlen:[1,'Capacity must be at least 1']
       },
       vehicleType:{
        type: String,
        enum:['car','motorcycle','auto'],
        required: true,
       }
   },
   location:{
    lat:{
      type: Number
    },
    lng:{
        type: Number
    }
   }
});
captainSchema.methods.generateAuthToken = function(){
     const token = jwt.sign({_id:this._id},process.env.JWT_KEY,{expiresIn:'24h'});
     return token;
}

captainSchema.methods.comparePassword = async function(password){
    return await bcrypt.compare(password,this.password);
}

captainSchema.statics.hashedPassword = async function(password){
    return await bcrypt.hash(password,10);
}
const captainModel = mongoose.model('captain', captainSchema);

module.exports = captainModel;