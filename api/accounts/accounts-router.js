const router = require('express').Router()
const md = require('./accounts-middleware.js')

router.get('/', (req, res, next) => {
  // DO YOUR MAGIC
  try {
    res.json('')
   res.json([{},{}])
  } catch (err) {
    next({ status: 422, message: 'this is awful' })
  }
})

router.get('/:id', md.checkAccountId, (req, res, next) => {
  // DO YOUR MAGIC
  try {
    res.json('get account by id')

  } catch (err) {
    next(err)
  }
})

router.post(
  '/', 
  md.checkAccountPayload, 
  md.checkAccountNameUnique, 
  (req, res, next) => {
  // DO YOUR MAGIC
  try {
    res.json('post account')

  } catch (err) {
    next(err)
  }
})

router.put(
  '/:id', 
  md.checkAccountId, 
  md.checkAccountPayload, 
  md.checkAccountNameUnique, 
  (req, res, next) => {
  // DO YOUR MAGIC
  try {
    res.json('')

  } catch (err) {
    next(err)
  }
});

router.delete('/:id', md.checkAccountId, (req, res, next) => {
  // DO YOUR MAGIC
  try {
    res.json('')

  } catch (err) {
    next(err)
  }
})

router.use((err, req, res, next) => { // eslint-disable-line
  res.status(err.status || 500).json({
    message: err.message,
  })
})

module.exports = router;
