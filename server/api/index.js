const router = require('express').Router()
module.exports = router

router.get("/", (req, res) => {
  res.send({ response: "I am alive" }).status(200);
});

router.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})
