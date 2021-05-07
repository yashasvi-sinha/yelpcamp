const UserModel = require("./models/User");


async function seedDB(){
    await UserModel.remove({})

    //
    const users = []
    for (let index = 0; index < 10; index++) {
        
        const user = {
            email: `abc${index}@abc.com`,
            password: "123"
        } 

        users.push(user)
        
    }


    const result = await UserModel.insertMany(users)

    console.log(result.length)
    
}

module.exports = { seedDB }