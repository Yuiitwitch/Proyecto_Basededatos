//Importo modelo de datos
const db = require("../models");
const usuarios = db.usuario;
const Op = db.Sequelize.Op; //Import all ORM sequelize functions 

const UsuarioController = {}; //Create the object controller





//CRUD end-points Functions
//-------------------------------------------------------------------------------------
//GET all categories from database
UsuarioController.getAll = (req, res) => {

  usuarios.findAll()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving categories."
      });
    });
};


//-------------------------------------------------------------------------------------
//GET categories by Id from database
UsuarioController.getById = (req, res) => {
  const id = req.params.id;

  usuarios.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find usuario with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving categories with id=" + id
      });
    });
};


//-------------------------------------------------------------------------------------
// //CREATE a new usuario in database
UsuarioController.create = (req, res) => {
  // Validate request
  // if (!req.body.type) {
  //   res.status(400).send({
  //     message: "Content can not be empty!"
  //   });
  //   return;
  // }

  // Create a usuario
  const neWUsuario = {
    name: req.body.name,
    lastName: req.body.lastName,
    email: req.body.email,
  };

  // Save usuario in the database
  usuarios.create(neWUsuario)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the new User."
      });
    });
};


//-------------------------------------------------------------------------------------
//UPDATE a usuario from database
UsuarioController.update = (req, res) => {
  const id = req.params.id;

  usuarios.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "usuario was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update usuario with id=${id}. Maybe Movie was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating usuario with id=" + id
      });
    });
};


//-------------------------------------------------------------------------------------
//GET categories by Type from database  
//FindByType
UsuarioController.getByType = (req, res) => {
  usuarios.findAll({ where: { usuario: req.params.id } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving categories."
      });
    });
};


//-------------------------------------------------------------------------------------
//DELETE a usuario by Id from database
UsuarioController.delete = (req, res) => {
  const id = req.params.id;

  usuarios.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "usuario was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete usuario with id=${id}. Maybe Movie was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete usuario with id=" + id
      });
    });
};


//-------------------------------------------------------------------------------------
//DELETE all categories from database
//delete all categories   
UsuarioController.deleteAll = (req, res) => {
  usuarios.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} categories were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all categories."
      });
    });
};

module.exports = UsuarioController;