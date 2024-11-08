const {Router} = require('express');
const path = require("path")
const User = require('../models/user.model.js')



const router = Router()


router.get("/register", (req, res) => {
    res.sendFile(path.join(__dirname, '..', '..', 'frontend', 'register.html'));
});

router.get("/login", (req, res) => {
    res.sendFile(path.join(__dirname, '..', '..', 'frontend', 'login.html'));
});

router.post("/register", async (req, res) => {
    const { username, email, password } = req.body;
    
    try {
        
        
        // Create a new user
        const newUser = new User({ username, email, password:password });
        
        await newUser.save();
        
        res.send("Registration successful!");
    } catch (error) {
        console.error(error);
        res.status(500).send("Error registering user.");
    }
});

router.post('/login',async (req,res)=>{
    const {email,password} = req.body;
    
     try {
        const token =await User.matchPasswordAndGenerateToken(email,password)
    //    console.log(token)
       res.cookie('token',token).send("User log in successful!");
     } catch (error) {
        console.log(error)
        res.status(500).send("Error in authenticating user")
        
     }
})

module.exports = router