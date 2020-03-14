const express = require("express");
const router = express.Router();
const searchArr = require('../helpers/data_collecton');
// let static count

router.get('/random_person', (req, res) => {
    let value = Math.floor(Math.random() * searchArr.length)

    let arr = [null];
    return res.send(searchArr[value]);
});

router.get('/images', (req, res, next) => {
    const randomArr = searchArr[Math.floor(Math.random() * searchArr.length)];

    var n=4;
    var arrData = [];
    var array=Array.from({length: searchArr.length},(v,k)=>k);
    
    var shuffled = array.sort(function(){return .5 - Math.random()});

    var selected=shuffled.slice(0,n);
    
    for(let i = 0; i <  selected.length; i++) {

        arrData.push(searchArr[selected[i]]);
    }
    
    // console.log(arrData);
    res.send(arrData)
});


module.exports = router;
