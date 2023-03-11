const UserExpense = require('../models/expense');
const User = require('../models/user');
const sequelize = require('../util/userDatabase');

exports.getUserExpense =  (req, res, next) => {
    const userId = req.user.id
    // console.log(userId)
    UserExpense.findAll({where: {userId: userId}})
    .then(expense => {
        return res.json(expense)
    })
    .catch(err => console.log(err))
}

exports.postUserExpense = async (req, res, next) => {
    const amount = req.body.amount;
    const description = req.body.description;
    const category = req.body.category;
    const userId = req.user.id
    let transact;
    try {
      transact = await sequelize.transaction();
      if(amount === undefined || amount.length ===0){
        return res.status(400).json({ success: false, message: 'Parameters missing '})
      }
        const result = await UserExpense.create({
            amount: amount,
            description: description,
            category: category,
            userId: userId
        }, { transaction: transact});
        await User.increment('totalExpense', {
            by: amount,
            where: { id: userId},
            transaction: transact
          });
          await transact.commit();
        return res.json(result);
    } catch (err) {
      if (transact) {
        await transact.rollback();
      }
        console.log(err);
    }
};


exports.deleteUserExpense = async (req, res, next) => {
    let transact;
    try {
      transact = await sequelize.transaction();
      const prodId = req.params.id;
      const UserId = req.user.id;
      // console.log(req.user)
      const expense = await UserExpense.findOne({
        where: {
          id: prodId,
          userId: UserId
        }
      });
      if (!expense) {
        return res.status(404).json({ message: 'Expense not found' });
      }
      await expense.destroy();
      await User.decrement('totalExpense', {
        by: expense.amount,
        where: { id: req.user.id },
        transaction: transact
      });
      await transact.commit();
      return res.status(204).end();
    } catch (err) {
      if (transact) {
        await transact.rollback();
      }
      console.log(err);
      return res.status(500).json({ error: 'Internal server error' });
    }
  };
  

exports.getEditExpense = async(req, res, next) =>{
    const prodId = req.params.id;
    const UserId = req.user.id;
    let transact;
    try{
        transact = await sequelize.transaction();
        const expense = await UserExpense.findOne({
            where: {
                id: prodId,
                userId: UserId
            }
        })
        await User.decrement('totalExpense', {
            by: expense.amount,
            where: { id: req.user.id },
            transaction: transact
          });
          await transact.commit();
          return res.json(expense)
    }
    catch(err) {
      if (transact) {
        await transact.rollback();
      }
      console.log(err)
    }
}

exports.postEditExpense = async (req, res, next) => {
  let transact;
    try {
      transact = await sequelize.transaction();
      const amount = req.body.amount;
      const description = req.body.description;
      const category = req.body.category;
      const prodId = req.params.id;
      const UserId = req.user.id;
      const expense = await UserExpense.findOne({
        where: {
          id: prodId,
          userId: UserId,
        },
      });
      if (!expense) {
        return res.status(404).json({ message: "Expense not found" });
      }
      expense.amount = amount;
      expense.description = description;
      expense.category = category;
      const updatedExpense = await expense.save();
      await User.increment('totalExpense', {
        by: amount,
        where: { id: req.user.id },
        transaction: transact
      });
      await transact.commit();
      return res.json(updatedExpense);
    } catch (error) {
      if (transact) {
        await transact.rollback();
      }
      console.log(error);
      return res.status(500).json({ message: "Internal server error" });
    }
  };
  