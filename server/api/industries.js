const router = require('express').Router();
const {models: {Industry}} = require('../db');
module.exports = router;

router.get('/', async(req, res, next) =>{
    try{
        res.send(await Industry.findAll())
    }
    catch(err){
        next(err)
    }
})
