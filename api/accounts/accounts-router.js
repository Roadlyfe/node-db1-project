const router = require('express').Router()
const dbConfig = require('../../data/db-config')
const md = require('./accounts-middleware')
const Account = require('./accounts-model')
router.get('/', async (req, res, next) => {
  try {
    const accounts = await Account.getAll()
    res.json(accounts)
  } catch (err) {
    next(err)
  }
})

router.get('/:id', md.checkAccountId, (req, res, next) => {
  res.json(req.account)
})

router.post('/', md.checkAccountPayload, md.checkAccountNameUnique, async (req, res, next) => {
  try {
    const data = await Account.create(req.body)
    res.status(201).json(data)
  } catch (err) {
    next(err)
  }
})

router.put('/:id',
  md.checkAccountId,
  md.checkAccountPayload,
  async (req, res, next) => {
    const updated = await Account.updateById(req.params.id, req.body)
    res.json(updated)
    try {
      res.json('update account')
    } catch (err) {
      next(err)
    }
  });

router.delete('/:id', md.checkAccountId, async (req, res, next) => {
  try {
    await Account.deleteById(req.params.id)
    res.json(req.account)
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