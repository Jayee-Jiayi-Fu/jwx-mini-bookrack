const mongoose = require("mongoose");
const Schema = mongoose.Schema.bind(mongoose);
const ObjectId = mongoose.Schema.Types.ObjectId;
const model = mongoose.model.bind(mongoose);

// 用户表
const userSchema = Schema({
    id:ObjectId,
    uid:String,//用户openid，小程序下发的唯一标识
    uname:String,//用户微信名,需要进行字符集编码，utf8mb4
    ugender:Number,//用户性别
    uaddress:String,//用户地址
    ubalance:Number,//用户积分余额
    uavatar:String,//用户头像
    skey:String,//用户登录态标识
    sessionKey:String,//微信登录态标识
    create_time:Date,//账户注册时间
    update_time:Date//用户最近登录时间
})

// 订单表
const orderSchema = Schema({
  oid:ObjectId,//订单ID
  uid:{ type: String, ref: "User" },//用户openid
  oprice:Number,//书籍价格
  otime:Date,//订单创建时间
  bkid:{type:ObjectId,ref:"Book"},//书籍ID
})

// 评论表
const commentSchema = Schema({
  cmid:ObjectId,//评论ID
  ccontent:String,//评论内容，utf8mb4
  ctime:Date,//评论时间
  uid:{type:String,ref:"User"},//用户openid
  uname:String,//用户用户名称，utf8mb4
  uavatar:String,//用户头像
  bkid:{type:ObjectId,ref:"Book"},//书籍ID
  bkname:String,//书籍名称
})

//书籍表
const bookSchema = Schema({
  _id:ObjectId,//书籍ID
  bkclass:Number,//书籍类别
  bkname:String,//书籍名称
  bkauthor:String,//书籍作者
  bkpublisher:String,//书籍出版社
  bkfile:String,//书籍文件地址，
  bkcover:String,//书籍封面
  bkprice:Number//书籍积分
})

  const User = model("User",userSchema)
  const Order = model('Order',orderSchema)
  const Comment = model('Comment',commentSchema)
  const Book = model("Book",bookSchema)

  
module.exports = {
  User,Order,Comment,Book
}
