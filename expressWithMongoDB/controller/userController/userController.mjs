import bcrypt from "bcryptjs";
import { db } from "../../connection/connection.mjs";


export const signup = async (req,res)=>{
    try {
        

        const {username,email,password} =req.body

        const hash = bcrypt.hashSync(password, 12);

        await db.collection('users').insertOne({username,email,password:hash});
        res.send({message:"User registered successfully!"})

    } catch (error) {
        console.log(error)
        res.send({errorMessage: error})
    }
}


export const login = async (req,res)=>{
    try {

        const {email, password} = req.body;
        const userData = await db.collection('users').findOne({email});
        // console.log(userData)
        if(userData){
                const passwordVerify = bcrypt.compareSync(password,userData.password);
                if(passwordVerify){
                    res.send({message: "Login Succesfull!"})                
               
                }else{
                    res.send({message: "User not Found!"})
                    
                }

        }else{
            res.send({message: "Invalid credentials!"})
        }
        
    } catch (error) {
              console.log(error)
        res.send({errorMessage: error})
    }
}