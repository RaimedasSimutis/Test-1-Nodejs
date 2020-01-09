const router = require("express").Router();
const userController = require('../user/userController.js');
const toDoController = require('../toDoList/toDoController.js');
const middleware = require('../middleware/middleware.js');


router.get('/', (req, res) => {
    res.json('API is working')
})

//user routes
router.post('/user/register', userController.register); 
router.get('/user/getAllUsers', userController.getAll);
router.get('/user/getSingleUser/:id', userController.getSingleUser);
router.post('/user/login', userController.login);

//to do routes
router.post('/todo/register', middleware.authenticate, toDoController.register);
router.get('/user/getAllToDoItems', middleware.authenticate , toDoController.getAll);
router.get('/user/getSingleToDoItem/:id', toDoController.getSingle);
router.delete('/user/deleteSingle/:id', toDoController.deleteSingle);

module.exports = router;