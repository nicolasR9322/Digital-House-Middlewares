const userList = ["Ada","Greta","Vim","Tim"]

module.exports = (req, res, next) => {
    if (userList.includes(req.query.name)){
        next()
    } else {
        res.send("no tienes permiso para ingresar")
    }
}