const CarModel = require("../models/Car");
const CustomerModel = require("../models/Customer");

async function seed() {
    await CarModel.remove({})
    await CustomerModel.remove({})
}

module.exports = seed