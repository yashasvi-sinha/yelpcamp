const CustomerModel = require("../models/Customer");
const { createnewcars, createnewcar } = require("./newcars");


async function user2() {
    const newcustomer = await CustomerModel({name:"Sarvesh"} )
    const finaluser = await newcustomer.save()
    createnewcars(finaluser._id)
    createnewcar(finaluser._id)
    return finaluser._id
}

module.exports = user2