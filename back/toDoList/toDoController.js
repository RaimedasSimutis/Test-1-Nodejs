const ToDo = require('./toDoModel.js');

const register = (req, res) => {
    let data = req.body;
    let toDo = new ToDo();
    toDo.item = data.item;
    toDo.user = req.user._id;
    
    toDo.save()
    .then((createdListItem) => {
        res.json(createdListItem);
    })
    .catch((error) => {
        res.status(400).json(error);
    })
}

const getAll = (req, res) => {
    ToDo.find({
        user: req.user._id,
    })
    .then(listItems => {
        res.json(listItems);
    })
    .catch(error => {
        res.status(400).json(error);
    })
}

const getSingle = (req, res) => {
    let id = req.params.id;

    ToDo.findById(id)
    .then(listItems => {
        res.json(listItems)
    })
    .catch(error => {
        res.status(400).json(error)
    })
}

const deleteSingle = (req, res) => {
    let id = req.params.id;
    // ToDo.deleteOne({ _id: id })
    // .then(listItems => {
    //     res.json(listItems)
    // })
    // .catch(error => {
    //     res.status(400).json(error)
    // })
    ToDo.findByIdAndDelete(id)
    .then(listItems => {
        res.json(listItems)
    })
    .catch(error => {
        res.status(400).json(error)
    })

}

module.exports = {register, getAll, getSingle, deleteSingle}