const router = require('express').Router();

//auth login
router.get('/login',(req,res) => {
    res.render('login');
});

//auth logout
router.get('/logout',(req,res) => {
    res.send('logging out');
});

//auth con google

router.get('/google',(req,res) => {
    res.send('logging in con google');
});

module.exports = router;