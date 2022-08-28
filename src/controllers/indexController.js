const { validationResult } = require('express-validator');
const usuarios = require('../data/usersDatabase.json');
const fs = require('fs');
const path = require('path');

const controller = {
    index: (req, res) => {
        return res.render('index');
    },
    indexPost: (req, res) => {
        const errors = validationResult(req);
        // return res.send(req.body)

        if(errors.isEmpty()){
            /* let nuevoUsuario = {
                nombre: req.body.nombre,
                color: req.body.color,
                email: req.body.email,
                edad: req.body.edad
            }
            usuarios.push(nuevoUsuario);
            fs.writeFileSync(path.resolve(__dirname, '..', 'data', 'usersDatabase.json'),JSON.stringify(usuarios, null, 3), 'utf-8'); */
            return res.render('index',{
                old: req.body
            })
        }else{
            return res.render('index',{
                errors: errors.mapped(),
                old: req.body
            })
        }
    }
}

module.exports = controller;