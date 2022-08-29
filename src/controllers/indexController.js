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
        if(errors.isEmpty()){
            let body = true
           /*  let nuevoUsuario = {
                nombre: req.body.nombre,
                color: req.body.color,
                email: req.body.email,
                edad: req.body.edad
            }
            usuarios.push(nuevoUsuario);
            fs.writeFileSync(path.resolve(__dirname, '..', 'data', 'usersDatabase.json'),JSON.stringify(usuarios, null, 3), 'utf-8'); */

            req.session.userLogin = {
                nombre: req.body.nombre,
                color: req.body.color,
                email: req.body.email,
                edad: req.body.edad
            }

            if(req.body.recordame){
                res.cookie('usuario', req.session.userLogin, {maxAge : 1000*60*2})
            }

           /*  let color = req.cookies.color;

           console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>',color);
 */
            return res.render('bienvenida',{
                old: req.body,
                body
            })
        }else{
            let body = false
            return res.render('index',{
                errors: errors.mapped(),
                old: req.body,
                body
            })
        }
    },
    bienvenida: (req, res) => {
        const session = req.session.userLogin

        return res.render('bienvenida',{
            session
        })
    },
    gracias: (req, res) => {
        const session = req.session.userLogin
        return res.render('gracias',{
            session
        });
    }
}

module.exports = controller;