const router = require('express').Router();
const {models: {UserSkill}} = require('../db');
module.exports = router;

router.get('/', async(req, res, next) =>{
    try{
        res.send(await UserSkill.findAll())
    }
    catch(err){
        next(err)
    }
})
