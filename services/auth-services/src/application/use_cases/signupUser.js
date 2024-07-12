const {createUser} = require('../../domain/entities/user')

async function signupUser(userRepository,userData){
    console.log("🚀 ~ file: signupUser.js:4 ~ signupUser ~ userRepository:", userRepository)
    const user = createUser(null,userData.userName,userData.email,userData.password)
    console.log("🚀 ~ file: signupUser.js:6 ~ signupUser ~ user:", user)
    return await userRepository.save(user)
}

module.exports = {signupUser}