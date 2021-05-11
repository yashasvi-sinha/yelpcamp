const CustomerModel = require("../models/Customer");
const { createnewcars } = require("./newcars");


async function user1() {
    const newcustomer = await CustomerModel({name:"Rajesh"} )
    const finaluser = await newcustomer.save()
    createnewcars(finaluser._id)
    return finaluser._id
}

module.exports = user1