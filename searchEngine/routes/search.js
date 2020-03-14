const express = require("express");
const router = express.Router();
const searchArr = require('../helpers/data_collecton');

router.post("/", (req, res) => {
  var inputSearch = req.body.search.toLowerCase();

  let data = searchArr.filter(item => {
    var searchresult = item.first_name.toLowerCase().search(inputSearch);
    return searchresult != -1 ? true : false;
  });

  return res.send(data);
  // return res.send(JSON.stringify(data));
});

// search result
router.get("/:id", (req, res) => {
  let userid = req.params.id;
  let result

  for(let i = 0; i <= searchArr.length; i++) {
    if(searchArr[i].id == userid) {
      result = searchArr[i];
      break;
    }
  }
  return res.render("pages/dashboard", {
    title: "Dahsboard",
    user: result
  });
});


module.exports = router;
