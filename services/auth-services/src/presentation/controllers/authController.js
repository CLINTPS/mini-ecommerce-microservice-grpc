const {signupUser} = require('../../application/use_cases/signupUser')
const {loginUser} = require('../../application/use_cases/loginUser')

function createAuthController(userRepository){
    console.log("Reached to auth controllers");
    async function signup(req,res){
        try {
            console.log("Auth constroll signup:",req.body);
            const user = await signupUser(userRepository,req.body)
            console.log("🚀 ~ file: authController.js:7 ~ signup ~ user:", user)
            res.json(user)
        } catch (error) {
            res.status(400).send(error.message)
        }
    }
    
    async function login(req,res){
        try {
        console.log("Auth constroll login:",req.body);
        const {email,password} = req.body
        const result = await loginUser(userRepository,email,password)
        console.log("🚀 ~ file: authController.js:20 ~ login ~ result:", result)
        res.json(result)
    } catch (error) {
        res.status(400).send(error.message)
    }
}

return {signup,login}

}

module.exports = {createAuthController}