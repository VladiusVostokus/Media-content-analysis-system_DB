'use strict';

const dataBase = require('../database');

const createUser = (req,res,next) => {
    const user = req.body;
    const query = 'INSERT INTO User SET ?';

    dataBase.query(query, user, (err, results) => {
        if (err) throw err;
        res.json({ id: results.insertId, ...user });
    });
};

const getAllUsers = (req, res) => {
    const query = 'SELECT * FROM User';
    dataBase.query(query, (err, results) => {
      if (err) throw err;
      res.json(results);
    });
};

const getUser = (req,res,next) => {

    const id = req.params.id;
    const query = `SELECT * FROM User WHERE id = ${id}`;
    dataBase.query(query, (err, results) => {
      if (err) throw err;
      res.json(results);
    });
};


const updatePassword = (req,res,next) => {
    const id = req.params.id;
    const updatedData = req.body;
    const query = `UPDATE User SET ? WHERE id = ${id}`;
    dataBase.query(query, updatedData, (err) => {
      if (err) throw err;
      res.json({ id: id, ...updatedData });
    });
};

const deleteUser = (req,res,next) => {
    const id = req.params.id;
    const query = `DELETE FROM User WHERE id = ${id}`;
    dataBase.query(query, (err) => {
        if (err) throw err;
        res.json({ id: id, message: 'User successfully deleted'});
    });
};

module.exports = {
    createUser, 
    getAllUsers, 
    getUser, updatePassword, 
    deleteUser
};