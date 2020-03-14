const express = require("express");
const router = express.Router();
const searchArr = require('../helpers/data_collecton');


router.get('/',  (req, res) => {
    res.render('pages/home', {
        title: 'Welcome Page'
    });
});

router.get('/images', (req, res, next) => {
    const randomArr = searchArr[Math.floor(Math.random() * searchArr.length)];

    var n=5;
    var arrData = [];
    var array=Array.from({length: searchArr.length},(v,k)=>k);
    
    var shuffled = array.sort(function(){return .5 - Math.random()});
    var selected=shuffled.slice(0,n);
    
    for(let i = 0; i <  selected.length; i++) {

        arrData.push(searchArr[selected[i]])
    }
    

    return res.render('pages/images', {
        title: 'All image',
        user: arrData

    })
});


module.exports = router;