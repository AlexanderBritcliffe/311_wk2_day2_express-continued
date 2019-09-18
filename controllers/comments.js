const comments = require('../data/comments');

const list = (req, res) => {
return res.json(comments);
}

const show = (req, res) => {
    const theFirstComment = comments.find(comment => comment._id == req.params.id) 
    return res.json(theFirstComment)
}


const create = (req, res) => {
    const appendComment = req.body
    const count = comments.length+1
    appendComment._id = count
    comments.push(appendComment)
    return res.json(appendComment)
}

module.exports = { list, show, create }