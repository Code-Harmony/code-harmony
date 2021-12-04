const router = require('express').Router()
module.exports = router

router.use('/users', require('./users'))
router.use('/account', require('./account'))
// router.use('/levelup', require('./levelup'))
// router.use('/lookingfor', require('./lookingfor'))
// router.use('/messages', require('./messages'))
router.use('/industries', require('./industries'))
router.use('/skills', require('./skills'))
router.use('/friend', require('./friend'))


router.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})
