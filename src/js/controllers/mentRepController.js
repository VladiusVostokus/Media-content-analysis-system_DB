'use strict';

const dataBase = require('../database');


const createMentRep = (req,res,next) => {
    const mentRep = req.body;
    const query = 'INSERT INTO MentionReport SET ?';

    dataBase.query(query, mentRep, (err, results) => {
        if (err) throw err;
        res.json({ id: results.insertId, ...mentRep });
    });
};

const getAllMentReps = (req, res) => {
    const query = 'SELECT * FROM MentionReport';
    dataBase.query(query, (err, results) => {
      if (err) throw err;
      res.json(results);
    });
};

const getMentRep = (req,res,next) => {
    const id = req.params.id;
    const query = `SELECT * FROM MentionReport WHERE id = ${id}`;
    dataBase.query(query, (err, results) => {
      if (err) throw err;
      res.json(results);
    });
};

const delMentRep = (req,res,next) => {
    const id = req.params.id;
    const query = `DELETE FROM MentionReport WHERE id = ${id}`;
    dataBase.query(query, (err) => {
        if (err) throw err;
        res.json({ id: id, message: 'User successfully deleted'});
    });
};

module.exports = {
    createMentRep,
    getAllMentReps,
    getMentRep,
    delMentRep,
};