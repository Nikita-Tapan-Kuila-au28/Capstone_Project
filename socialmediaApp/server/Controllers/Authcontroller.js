import UserModel from "../Models/usersModel.js";
import { mongooseUrl} from "../database/logindb.js";
import bcrypt from "bcrypt";

//registering new user
export const register=async(req,res)=>{
   mongooseUrl();
   
    const hashpswd=await bcrypt.hash(req.body.password,10)
  
    req.body.password=hashpswd
    const newUser= new UserModel (req.body);
    try {
        await newUser.save();
        res.status(200).json(newUser)
    } catch (error) {
        res.status(500).json({message:error.message})
        
    }

}

// login the existing user
export const loggedIn=async(req,res)=>{
   mongooseUrl();
    const {username,password}=req.body;

    try {
        const user=await UserModel.findOne({username:username});

        if(!user){
            return res.status(500).json("Invalid username or password");

        }
        if(await bcrypt.compare(password,user.password)) {
            return res.send("LOGIN");
        }
    } catch (error) {
        res.status(500).json({message:error.message})
    }



}