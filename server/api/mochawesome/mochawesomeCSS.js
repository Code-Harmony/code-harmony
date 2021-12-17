const router = require('express').Router();
const path = require('path')

module.exports = router;

// GET /api/assets/app.css
router.get('/', async (req, res, next) => {
    try {
        res.sendFile(path.join(__dirname, '../../../mochawesome-report/assets', 'app.css'));
    } catch (err) {
        next(err)
    }
})