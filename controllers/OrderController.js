//Importo modelo de datos
const db = require("../models");
const orders = db.order;
const Op = db.Sequelize.Op; //Import all ORM sequelize functions 

const OrderController = {}; //Create the object controller


//CRUD end-points Functions
//-------------------------------------------------------------------------------------
//GET all categories from database
OrderController.getAll = (req, res) => {
  
    orders.findAll()
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
OrderController.getById = (req, res) => {
    const id = req.params.id;
  
    orders.findByPk(id)
      .then(data => {
        if (data) {
          res.send(data);
        } else {
          res.status(404).send({
            message: `Cannot find order with id=${id}.`
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
//CREATE a new order in database
OrderController.create = (req, res) => {
    // Validate request
    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
      return;
    }
  
    // Create a order
    const neWorder = {
      returnDate: req.body.returnDate,
      rentalDate: req.body.rentalDate
    };
  
    // Save order in the database
    orders.create(neWorder)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the neWorder."
        });
      });
  };


//-------------------------------------------------------------------------------------
//UPDATE a order from database
OrderController.update = (req, res) => {
    const id = req.params.id;
  
    orders.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "order was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update order with id=${id}. Maybe Movie was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating order with id=" + id
        });
      });
  };


//-------------------------------------------------------------------------------------
//GET categories by Type from database  
//FindByType
OrderController.getByType = (req, res) => {
    orders.findAll({ where: { order: req.params.id } })
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
//DELETE a order by Id from database
OrderController.delete = (req, res) => {
    const id = req.params.id;
  
    order.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "order was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete order with id=${id}. Maybe Movie was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete order with id=" + id
        });
      });
  };


//-------------------------------------------------------------------------------------
//DELETE all order from database
//delete all order  
OrderController.deleteAll = (req, res) => {
    order.destroy({
      where: {},
      truncate: false
    })
      .then(nums => {
        res.send({ message: `${nums} order were deleted successfully!` });
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while removing all order."
        });
      });
  };

module.exports = OrderController;