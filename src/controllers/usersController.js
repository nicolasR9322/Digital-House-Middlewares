module.exports = {
    index: (req, res) => {
        res.render("login")
    },
    register: (req,res) => {
        let user = req.query.name
        
        

       /*  if( userList.includes(user)){
            res.render("admin",{
                user
            })
        } else {
            res.send("no tiene permiso para ingresar")
        } */
        res.render("admin",{
            user
        })
       
    },
}