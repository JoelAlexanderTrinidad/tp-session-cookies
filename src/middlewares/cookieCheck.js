module.exports = (req,res,next) =>{
    if(req.cookies.usuario){
        req.session.userLogin = req.cookies.usuario
    }
    console.log('>>>>>>>>>>>>>>>>>>>',req.session.userLogin)
    next()
}