//Importo modelo de datos
const db = require("../models");
const movie = db.movie;
const Op = db.Sequelize.Op; //Import all ORM sequelize functions 

// var movies  = require('../models').movies;  //Add for dependency response

const MovieController = {}; //Create the object controller



//CRUD end-points Functions
//-------------------------------------------------------------------------------------
//GET all movies from database
MovieController.getAll = (req, res) => {
    
    movie.findAll({include: [{ model:movie}]})
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving movies."
        });
      });
  };


//-------------------------------------------------------------------------------------
//GET movies by Id from database
MovieController.getById = (req, res) => {
    const id = req.params.id;

    movie.findByPk(id, {include: [{ model:movie}]})
      .then(data => {
        if (data) {
          res.send(data);
        } else {
          res.status(404).send({
            message: `Cannot find Tutorial with id=${id}.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving movies with id=" + id
        });
      });
  };



//-------------------------------------------------------------------------------------
//CREATE a new movie in database
MovieController.create = (req, res) => {
    // Validate request
    if (!req.body.title) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
      return;
    }
  
    // Create a Movies
    const newMovie = {
      name: req.body.name,
      gender: req.body.gender,
      actor: req.body.actor
    };
  
    // Save Movies in the database
    movie.create(newMovie)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Movie."
        });
      });
  };


//-------------------------------------------------------------------------------------
//UPDATE a movie from database
MovieController.update = (req, res) => {
    const id = req.params.id;
  
    movie.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Movie was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Movie with id=${id}. Maybe Movie was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Movie with id=" + id
        });
      });
  };


//-------------------------------------------------------------------------------------
//GET movie by Title from database 
//FindByTitle
  MovieController.getByTitle = (req, res) => {
    movie.findAll({ where: { movie: req.params.name } })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving tutorials."
        });
      });
  };


//-------------------------------------------------------------------------------------
//DELETE a movie by Id from database
MovieController.delete = (req, res) => {
    const id = req.params.id;
  
    movie.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Movie was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Movie with id=${id}. Maybe Movie was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Movie with id=" + id
        });
      });
  };


//-------------------------------------------------------------------------------------
//DELETE all movies from database
//delete all movies 
  MovieController.deleteAll = (req, res) => {
    movie.destroy({
      where: {},
      truncate: false
    })
      .then(nums => {
        res.send({ message: `${nums} Movies were deleted successfully!` });
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while removing all movies."
        });
      });
  };

module.exports = MovieController;