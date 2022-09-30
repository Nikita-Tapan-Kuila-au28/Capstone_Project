import mongoose from "mongoose";

const UserSchema=mongoose.Schema(
    {
        userName:{
            type:String,
            required:true,
            unique:true

        },
        firstName:{
            type:String,
            required:true,
            
        },
        lastName:{
            type:String,
            required:true,
          
        },
        password:{
            type:String,
            required:true

        },
        confirmpass:{
            type:String,
            required:true

        },
        profile_picture:{
            type:String
        },
        cover_picture:{
            type:String
        },
        about:{type:String},
        livesin:{type:String},
        worksAt:{type:String},
        relationshipStatus:{type:String},
        hobbies:{type:String},
        followers:[],
        following:[],
        videos:[]
      


    },
    {timestamps:true}
)

const UserModel=mongoose.model("users",UserSchema);
export default UserModel