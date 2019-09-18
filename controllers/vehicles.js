const vehicles = require('../data/vehicles');

const list = (req, res) => {
return res.json(vehicles);
}

const show = (req, res) => {
    const theFirstVehicle = comments.find(vehicle => vehicle._id == req.params.id) 
    return res.json(theFirstVehicle)
}


const create = (req, res) => {
    const appendVehicle = req.body
    const count = vehicles.length+1
    appendVehicle._id = count
    vehicles.push(appendVehicle)
    return res.json(appendVehicle)
}

module.exports = { list, show, create }