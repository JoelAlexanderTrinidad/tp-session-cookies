const { check } = require('express-validator');

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
    check('edad')
        .notEmpty().withMessage('Debes ingresar tu edad').bail()
        .isNumeric().withMessage('Solo debes ingresar números')
]

module.exports = validations