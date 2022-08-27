const { validationResult } = require('express-validator');
const usuarios = require('../data/usersDatabase.json');
const fs = require('fs');
const path = require('path');

const controller = {
    register: (req, res) => {
        return res.render('register');
    },
    processRegister: (req, res) => {
        const errors = validationResult(req);
        // return res.send(req.body)
        if(errors.isEmpty()){
            let nuevoUsuario = {
                nombre: req.body.nombre,
                color: req.body.color,
                email: req.body.email,
                edad: req.body.edad
            }
            usuarios.push(nuevoUsuario);
            fs.writeFileSync(path.resolve(__dirname, '..', 'data', 'usersDatabase.json'),JSON.stringify(usuarios, null, 3), 'utf-8');
            return res.send('Usuario registrado');
        }else{
            return res.render('register',{
                errors: errors.mapped(),
                old: req.body
            })
        }
    },
    login: (req, res) => {
        return res.render('login');
    },
    profile: (req, res) => {
        return res.render('profile');
    },
}

module.exports = controller;