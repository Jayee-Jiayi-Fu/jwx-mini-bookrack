const { User } = require('../model')

const UserController = {

  byId(req, res) {
    // const id = req.params.id;

    // Product.findOne({ _id: id })
    //   .populate('manufacturer')
    //   .exec((err, product) => res.json(product))
  },
  create(req, res) {
    // const reqBody = req.body
    // const newProduct = new Product(reqBody)

    // newProduct.save((err, saved) => {
    //   Product.findOne({ _id: newProduct._id })
    //     .populate('manufacturer')
    //     .exec((err, product) => res.json(product))
    // })
  },
  update(req, res) {
    // const id = req.params.id
    // let product = req.body

    // Product.updateOne({ _id: id }, { ...product }, (err, updated) => {
    //   res.json(updated)
    // })
  },
  remove(req, res) {
    // const id = req.params.id

    // Product.findOne({ _id: id }).remove((err, removed) => res.json(id))
  }
}
module.exports = UserController