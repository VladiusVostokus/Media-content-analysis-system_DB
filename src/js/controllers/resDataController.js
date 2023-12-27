'use strict';

const dataBase = require('../database');

const createResData = (req,res,next) => {
    const resData = req.body;
    const query = 'INSERT INTO ResultData SET ?';

    dataBase.query(query, resData, (err, results) => {
        if (err) throw err;
        res.json({ id: results.insertId, ...resData });
    });
};

const getAllResData = (req,res,next) => {
    const query = 'SELECT * FROM ResultData';
    dataBase.query(query, (err, results) => {
      if (err) throw err;
      res.json(results);
    });
};

const getResData = (req,res,next) => {
    const id = req.params.id;
    const query = `SELECT * FROM ResultData WHERE id = ${id}`;
    dataBase.query(query, (err, results) => {
      if (err) throw err;
      res.json(results);
    });
};

const delResData = (req,res,next) => {
    const id = req.params.id;
    const query = `DELETE FROM ResultData WHERE id = ${id}`;
    dataBase.query(query, (err) => {
        if (err) throw err;
        res.json({ id: id, message: 'Result data successfully deleted'});
    });
};

module.exports = {
    createResData,
    getAllResData,
    getResData,
    delResData,
};