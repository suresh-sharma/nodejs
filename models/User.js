const mangoose=require("mongoose");

const UserSchema=new mangoose.Schema({
      nane : {
        type: String,
        required:true
      },
      email : {
        type: String,
        required:true
      },
      password : {
        type: String,
        required:true
      },
      salary : {
        type: Number,
        required:true
      },
      date : {
        type: String,
        default:Date.now
      }
    });

const user=mangoose.model("User",UserSchema);

module.exports=user;