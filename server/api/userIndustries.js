const router = require('express').Router();
const {models: {UserIndustry}} = require('../db');
module.exports = router;

router.get('/', async(req, res, next) =>{
    try{
        res.send(await UserIndustry.findAll())
    }
    catch(err){
        next(err)
    }
})
