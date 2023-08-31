const express = require('express');
const app = express();
//const  ProductController = require('../controller/Product');
const userController = require('../controller/userController');
const creatValidation = require('../middleware/validation');
const validator = require("../middleware/validation_01");


app.get('/get', userController.getAll);
app.get('/getItem',userController.getOneById);
app.post('/addItem',validator.addItem,userController.addItem);
app.delete('/deleteOne',userController.deleteById);
app.get('/findcg',userController.findByCgpa);

app.use('*', (req, res) => {
    return res.status(400).send('Wrong URL!');
});
module.exports = app;

