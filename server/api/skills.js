const router = require('express').Router();
const {models: {Skill}} = require('../db');
module.exports = router;

router.get('/', async(req, res, next) =>{
    try{
        res.send(await Skill.findAll())
    }
    catch(err){
        next(err)
    }
})
