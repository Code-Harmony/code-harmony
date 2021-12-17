const router = require('express').Router()
module.exports = router

router.use('/users', require('./users'))
router.use('/levelup', require('./levelup'))
router.use('/account', require('./account'))
router.use('/mochawesome.html', require('./mochawesome/mochawesomeHTML'))
router.use('/assets/app.css', require('./mochawesome/mochawesomeCSS'))
router.use('/assets/app.js', require('./mochawesome/mochawesomeAPP'))
router.use('/assets/MaterialIcons-Regular.woff2', require('./mochawesome/mochawesomeWOFF2_1'))
router.use('/assets/roboto-regular-webfont.woff2', require('./mochawesome/mochawesomeWOFF2_2'))
router.use('/assets/roboto-light-webfont.woff2', require('./mochawesome/mochawesomeWOFF2_3'))


// router.use('/lookingfor', require('./lookingfor'))
// router.use('/messages', require('./messages'))
router.use('/industries', require('./industries'))
router.use('/skills', require('./skills'))
router.use('/friend', require('./friend'))
router.use('/userSkills', require('./userSkills'))
router.use('/userIndustries', require('./userIndustries'))

router.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})