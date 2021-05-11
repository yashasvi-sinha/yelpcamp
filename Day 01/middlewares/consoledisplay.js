const CarModel = require("../models/Car")
const CustomerModel = require("../models/Customer")

async function finaloutput(customer1, customer2) {
    let one = await customer1
    const two = await customer2
    hello = JSON.stringify(one)
    console.log(hello)
    const first = await CustomerModel.find({_id:hello})
    // console.log(first.cars)
}
module.exports = finaloutput