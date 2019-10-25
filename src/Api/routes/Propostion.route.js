const express = require('express');
const app = express();
const propositionRoutes = express.Router();

// Require Propostion model in our routes module
let Proposition = require('../models/Proposition');

// Defined store route
propositionRoutes.route('/add').post(function (req, res) {
  let propostion = new Proposition(req.body);
  propostion.save()
    .then(propostion => {
      res.status(200).json({'propostion': 'propostion has been added successfully'});
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});

// Defined get data(index or listing) route
propositionRoutes.route('/').get(function (req, res) {
  Proposition.find(function (err, propostion){
    if(err){
      console.log(err);
    }
    else {
      res.json(propostion);
    }
  });
});

// Defined edit route
propositionRoutes.route('/edit/:id').get(function (req, res) {
  let id = req.params.id;
  Proposition.findById(id, function (err, propostion){
      res.json(propostion);
  });
});

//  Defined update route
propositionRoutes.route('/update/:id').post(function (req, res) {
  Proposition.findById(req.params.id, function(err, propostion) {
    if (!propostion)
      res.status(404).send("Record not found");
    else {
      propostion.Nav = req.body.Nav;
      propostion.Pasnav = req.body.Pasnav;
      propostion.Herem= req.body.Herem;
      propostion.Pesniyari= req.body.Pesniyari;
      propostion.save().then(propostion => {
          res.json('Update complete');
      })
      .catch(err => {
            res.status(400).send("unable to update the database");
      });
    }
  });
});

// Defined delete | remove | destroy route
propositionRoutes.route('/delete/:id').get(function (req, res) {
    Proposition.findByIdAndRemove({_id: req.params.id}, function(err, propostion){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports = propositionRoutes;
