const express = require('express');

const {
    addUser,
    getUsers,
    getUser,
    updateUser,
    deleteUser
} = require('../controllers/userController');

const U_Router = express.Router();

// Create
U_Router.post('/add', addUser);

// Read All
U_Router.get('/all', getUsers);

// Read One
U_Router.get('/:id', getUser);

// Update
U_Router.put('/update/:id', updateUser);

// Delete
U_Router.delete('/delete/:id', deleteUser);

module.exports = U_Router;
