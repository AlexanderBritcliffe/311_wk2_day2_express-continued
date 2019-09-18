const products = require('../data/products');

const list = (req, res) => {
return res.json(products);
}

const show = (req, res) => {
    const theFirstProduct = products.find(products => product._id == req.params.id) 
    return res.json(theFirstProduct)
}


const create = (req, res) => {
    const appendProduct = req.body
    const count = products.length+1
    appendProduct._id = count
    contacts.push(appendProduct)
    return res.json(appendProduct)
}

module.exports = { list, show, create }