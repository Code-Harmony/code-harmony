const router = require('express').Router();
const {models: {UserDetail}} = require('../db');
module.exports = router;

router.get('/', async(req, res, next) =>{
    try{
        res.send(await UserDetail.findAll())
    }
    catch(err){
        next(err)
    }
})

router.post('/', async (req, res, next) =>{
    try{
        //fix for create
        const account = await UserDetail.findByPk(req.params.id)
        res.send(await UserDetail.update({
            id: req.body.id,
            name: req.body.name,
            email: req.body.email, 
            industry: req.body.industry, 
            description: req.body.description, 
            zipcode: req.body.zipcode,
        }))
    }
    catch(err){
        next(err)
    }
})

router.put('/:id', async (req, res, next) =>{
    try{
        const account = await UserDetail.findByPk(req.params.id)
        console.log(req.body)
        res.send(await account.update({
            name: req.body.name,
            email: req.body.email, 
            industry: req.body.industry, 
            description: req.body.description, 
            zipcode: req.body.zipcode,
        }))
    }
    catch(err){
        next(err)
    }
})
