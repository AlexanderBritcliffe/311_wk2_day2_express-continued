const contacts = require('../data/contacts');

const list = (req, res) => {
return res.json(contacts);
}

const show = (req, res) => {
    const theFirstContact = comments.find(comment => comment._id == req.params.id) 
    return res.json(theFirstContact)
}


const create = (req, res) => {
    const appendContact = req.body
    const count = contacts.length+1
    appendContact._id = count
    contacts.push(appendContact)
    return res.json(appendContact)
}

module.exports = { list, show, create }