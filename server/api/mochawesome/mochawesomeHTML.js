const router = require('express').Router();
const path = require('path')

module.exports = router;

// GET /api/mochawesome.html
router.get('/', async (req, res, next) => {
    try {
        res.sendFile(path.join(__dirname, '../../../mochawesome-report', 'mochawesome.html'));
    } catch (err) {
        next(err)
    }
})