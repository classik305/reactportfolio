const express = require('express');
const path = require('path');

const router = express.Router();
// const staticMiddleware = express.static(path.join(__dirname, '..', 'portfolio','loanamort','build'));

router.use('/loanamort', (req, res, next) => {
  next();
});

router.use('/loanamort/', (req, res, next) => {
  staticMiddleware(req, res, next);
});

router.get('/loanamort/', (req, res) => {
  // res.sendFile(path.join(__dirname, '..', 'portfolio','loanamort','build', 'index.html'));
  // console.log(path.join(__dirname, '..', 'portfolio','loanamort','build'))
  // res.sendFile('/index.html');
});

module.exports = router;
