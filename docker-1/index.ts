import express from "express";
import { user } from "./db";

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hllo wolrd!, Your page.")
})

app.post("/signup", async (req, res) => {
    try{
        const {email, username, password} = req.body;
        const response = await user.create({email, username, password});

        res.status(200).json({
            message:"User created successfully",
            data:response
        })
    }catch(error){
        console.log("Error", error);
    }
})

app.post("/signin", async (req, res) => {
    try{
        const {email, password} = req.body;
        const findUser = await user.findOne({email:email});
        if(!findUser) {
            res.status(408).json({
                message:"User does not present"
            })
            return
        }

        if(password !== findUser?.password){
            return res.status(404).json({
                message:"Incorrect password"
            })
        }

        res.status(200).json({
            message:"User login successfully",
            data:findUser
        })

    }catch(error){

    }
})


app.listen(3000);
