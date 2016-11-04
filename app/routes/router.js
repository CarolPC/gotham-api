const router = require('express').Router();
const charactersRouter = require('app/routes/characters-router');

router.use('/characters', charactersRouter);

module.exports = router;