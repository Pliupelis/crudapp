const axios = require('axios')

exports.homeRoutes = (req, res)=>{
    axios.get('http://localhost:3000/api/users')
    .then(function(response){
        res.render('index', {users:response.data})
        console.log(response.data)

    })
    .catch(err=>{
        res.send(err)
        })
    }
exports.add_user=(req, res)=>{
    res.render('user')
}

exports.update_user=(req, res)=>{
    res.render('update_user')
}