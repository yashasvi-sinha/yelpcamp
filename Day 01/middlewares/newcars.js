const { car1, car2, car3, car4 } = require("../entities/cars");
const CarModel = require("../models/Car");
const CustomerModel = require("../models/Customer");

async function createnewcars(id) {
    const targetcustomer = await CustomerModel.findById(id)
    const one = await CarModel.create(car1)
    one.customer = targetcustomer
    const onecar = await one.save()

    const two = await CarModel.create(car2)
    two.customer = targetcustomer
    const twocar = await two.save()

    const three = await CarModel.create(car3)
    three.customer = targetcustomer
    const threecar = await three.save()

    targetcustomer.cars.push(one)
    targetcustomer.cars.push(two)
    targetcustomer.cars.push(three)
    
    const finalcustomer = await targetcustomer.save()
}

async function createnewcar(id) {
    const targetcustomer = await CustomerModel.findById(id)
    const one = await CarModel.create(car4)
    one.customer = targetcustomer
    const onecar = await one.save()
    targetcustomer.cars.push(one)
    const finalcustomer = await targetcustomer.save()
}

module.exports = {createnewcars, createnewcar}