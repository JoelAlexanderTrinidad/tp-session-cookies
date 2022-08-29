const { check } = require('express-validator');
const usuarios = require('../data/usersDatabase.json')

const validations = [
    check('nombre')
        .notEmpty().withMessage('Debes ingresar un nombre').bail()
        .isLength({min: 3}).withMessage('Debes ingresar un mínimo de 3 caracteres'),
    check('color')
        .notEmpty().withMessage('Debes seleccionar un color'),
    check('email')
        .notEmpty().withMessage('Debes ingresar un nombre')
        .notEmpty().withMessage('Debe completar el email').bail()
        .isEmail().withMessage('Debes ingresar un email válido'),
        /* .custom((value)=>{
            const usuario = usuarios.find(usuario => usuario.email === value);
            if(usuario){
                return true
            }else{
                return false
            }
        }).withMessage('Ingrese otro mail, el mismo ya está registrado'), */
    check('edad')
        .notEmpty().withMessage('Debes ingresar tu edad').bail()
        .isNumeric().withMessage('Solo debes ingresar números')
]

module.exports = validations