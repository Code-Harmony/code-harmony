const router = require('express').Router();
const {models: {User}} = require('../db');
module.exports = router;

router.get('/', async(req, res, next) =>{
    try{
        res.send(await User.findAll())
    }
    catch(err){
        next(err)
    }
})

router.post('/', async (req, res, next) =>{
    try{
        //fix for create
        const account = await User.findByPk(req.params.id)
        res.send(await User.update({
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
        const account = await User.findByPk(req.params.id)
        console.log(req.body)
        res.send(await account.update({
            photoUrl: req.body.photoUrl,
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
