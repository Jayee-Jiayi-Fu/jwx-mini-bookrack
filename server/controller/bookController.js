const { Book } = require('../model')
const {ERR_MSG} = require('../constants/error')

/**
 * TODO: 请求体检查
 */

const BookController = {

  async create(req, res) {
      const reqBody = req.body
      const newBook = new Book(reqBody)
      const _id = {newBook}
      
      await newBook.save()
      .catch(err=>res.json({ok:0,msg:ERR_MSG.BOOK_CREATE_ERROR}))


      const data = await Book.findOne({_id}).exec()
      .catch(err=>res.json({ok:0,msg:ERR_MSG.BOOK_CREATE_ERROR}))

      data && res.json({ok:1,data})
  },

  async remove(req, res) {
    const _id = req.params.id
    const data = await Book.findOne({_id}).remove()
    .catch(err=>res.json({ok:0,msg:ERR_MSG.BOOK_REMOVE_FAIL}))

    data && res.json({ok:1})
  },

  async update(req, res) {
    const _id = req.params.id
    const reqBody = req.body
    const data = await Book.updateOne({_id},{...reqBody})
    .catch(err=>res.json({ok:0,msg:ERR_MSG.BOOK_UPDATE_FAIL}))

    data && res.json({ok:1})
  },

  async byId(req, res) {
    const _id = req.params.id;
    const data = await Book.findOne({_id}).exec()
    .catch(err=>res.json({ok:0,msg:ERR_MSG.BOOK_NOT_FOUND}))
    
    data && res.json({ok:1,data})
  },

  async all(req, res) {
    const data = await Book.find({}).exec()
    .catch(err=>res.json({ok:0,msg:ERR_MSG.BOOK_NOT_FOUND}))

    data && res.json({ok:1,data})
  },
}

module.exports = BookController