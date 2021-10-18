var userdb = require('../model/model')

//create save user
exports.create = (req, res)=>{
    //validate req
    if(!req.body){
        res.status(400)
        .send({message: "cannot be empty"})
        return 
    }

    const user = new userdb({
        name: req.body.name,
        email: req.body.email,
        gender: req.body.gender,
        status: req.body.status

    })

    //save user in db
    user
        .save(user)
        .then(data =>{
            
            res.redirect('/')
        })
        .catch(err=>{
            res.status(500).send({
                message:err.message || "create op error" 
            })
        })
}
exports.find = (req, res)=>{
    if(req.query.id){
        const id = req.query.id
        userdb.findById(id)
        .then(data=>{
            if(!data){
                res.status(404)
                    .send({message:"not found"})
            }else{
                res.send(data)
            }
        }).catch(err=>{
            res.status(500).send({message:"user not found"})
        })
    }else{
    userdb.find()
    .then(user =>{
        res.send(user)
    })
    .catch(err=>{
        res.status(500).send({
            message: err.message || "error on find"})
    })
    }
}
exports.update = (req, res)=>{
    if(!req.body){
        return res
            .status(400)
            .send({ message : "Data to update can not be empty"})
        
            }

    const id = req.params.id;
    userdb.findByIdAndUpdate(id, req.body, { useFindAndModify: false})
        .then(data => {
            if(!data){
                res.status(404).send({ message : `Cannot Update user with ${id}. Maybe user not found!`})
            }else{
                res.send(data)
            }
        })
        .catch(err =>{
            res.status(500).send({ message : "Error Update user information"})
        })
}

exports.delete = (req, res)=>{
    const id = req.params.id;

    userdb.findByIdAndDelete(id)
        .then(data => {
            if(!data){
                res.status(404).send({ message : `Cannot Delete with id ${id}. Maybe id is wrong`})
            }else{
                res.send({
                    message : "User was deleted successfully!"
                })
            }
        })
        .catch(err =>{
            res.status(500).send({
                message: "Could not delete User with id=" + id
            });
        });
}