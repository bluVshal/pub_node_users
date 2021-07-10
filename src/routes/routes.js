const express = require('express');
const router = express.Router();
const userGetControllers = require('../controllers/getControllers');

/* GET users. */
router.get('/', async function(req, res, next) {
  try {
    if(!req.query.hasOwnProperty('uname')){
      res.json(await userGetControllers.getUsers());
    }
    else{
      res.json(await userGetControllers.getUsersByParams(req.query));
    }
  } catch (err) {
    console.error(`Error while getting users `, err.message);
    next(err);
  }
});

/* GET users by Id */
router.get('/:userId', async function(req, res, next) {
  try {
    res.json(await userGetControllers.getUsersById(req.params.userId));
  } catch (err) {
    console.error(`Error while getting users by id `, err.message);
    next(err);
  }
});

module.exports = router;