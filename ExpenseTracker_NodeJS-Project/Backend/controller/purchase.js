const Razorpay = require('razorpay');
const Order = require('../models/order');

exports.purchaseMembership = async (req, res, next) => {
  try {
    const rzp = new Razorpay({
      key_id: 'rzp_test_dDc29wYu6M6eKZ',
      key_secret: 'U3TkkASctOlSKWbTeXY0L4Yu'
    });
    const amount = 1500;

    const order = await rzp.orders.create({ amount, currency: "INR" });

    await req.user.createOrder({ orderid: order.id, status: "PENDING" });

    return res.status(201).json({ order, key_id: rzp.key_id });
  } catch (err) {
    res.status(403).json({ message: 'something went wrong', error: err });
  }
};

exports.transactionUpdate = async (req, res, next) => {
    try {
      const { payment_id, order_id } = req.body;
      const order = await Order.findOne({ where: { orderid: order_id } });
  
      const promise1 =  order.update({ paymentid: payment_id, status: "SUCCESSFULL" });
      const promise2 =  req.user.update({ isPremiumUser: true });

      Promise.all([promise1, promise2]).then(()=>{
        return res.status(202).json({ success: true, message: "Transaction Successful" });
      }).catch((err)=>{
        console.log(err)
      })
    } catch (err) {
      console.log(err);
    }
  };
  
  exports.transactionUpdate = async (req , res, next) => {
    try{
      console.log(req.body.order_id)
      const orderid = req.body.order_id;
      const order = await Order.findOne({ where: { orderid: orderid } });
      order.update({ status: "FAILED" })
      return res.status(403).json({ message: 'Transaction Failed'});
    }catch(err){
      console.log(err)
    }
  }
