const router = require('express').Router();
const path = require('path')

module.exports = router;

// GET /api/assets/app.js
router.get('/', async (req, res, next) => {
    try {
        res.sendFile(path.join(__dirname, '../../../mochawesome-report/assets', 'app.js'));
    } catch (err) {
        next(err)
    }
})