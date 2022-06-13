exports.checkAccountPayload = (req, res, next) => {
  // DO YOUR MAGIC
  // Note: you can either write "manual" validation logic
  // or use the Yup library (not currently installed)
  console.log('checkAccountPayload')
next()
}

exports.checkAccountNameUnique = (req, res, next) => {
  // DO YOUR MAGIC
  console.log("checkAccountNameUnique")
next()
}

exports.checkAccountId = (req, res, next) => {
  // DO YOUR MAGIC
  console.log("checkAccountId")
next()
}
