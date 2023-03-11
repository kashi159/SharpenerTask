const User = require ('../models/user');
const UserExpense = require('../models/expense');
const sequelize = require('../util/userDatabase');
const express = require('express')
const AWS = require('aws-sdk');
const { response } = require('express');

async function getAllUsersWithExpenses(req, res) {
  try{  
    const users = await User.findAll({
      attributes: [
        'name',
        'totalExpense'
      ],
      order: [['totalExpense', 'DESC']]
    });
    res.status(200).json(users)

  }catch (err){
    console.log(err)
  }
}

function uploadToS3(data, filename) {
  const BUCKET_NAME = 'expensetrackerapp159';
  const IAM_USER_KEY = 'AKIA2DHNOY74GHAXP5TK';
  const IAM_USER_SECRET = '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';

  let s3bucket = new AWS.S3({
    accessKeyId: IAM_USER_KEY,
    secretAccessKey: IAM_USER_SECRET
  });

  return new Promise((resolve, reject) => {
    var params = {
      Bucket: BUCKET_NAME,
      Key: filename,
      Body: data,
      ACL: 'public-read'
    };
    s3bucket.upload(params, (err, response) => {
      if (err) {
        reject(err);
      } else {
        resolve(response.Location);
      }
    });
  });
}

async function download(req, res, next) {
  try {
    const userId = req.user.id;
    const expenses = await UserExpense.findAll({ where: { userId: userId } });
    const strExpenses = JSON.stringify(expenses);
    const filename = `Expense${userId}/${new Date()}.txt`;
    const fileURL = await uploadToS3(strExpenses, filename);
    res.status(201).json({ fileURL, success: true });
  } catch (err) {
    console.log(err);
    res.status(500).json({ success: false, message: 'Server error' });
  }
}


  module.exports = { getAllUsersWithExpenses, download };
  
  
  
  
  
  
  