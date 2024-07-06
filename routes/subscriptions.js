const express = require('express');
const Subscription = require('../models/Subscription');
const router = express.Router();

// Get all subscriptions
router.get('/', async (req, res) => {
  const subscriptions = await Subscription.find().populate('movieId').populate('memberId');
  res.json(subscriptions);
});

// Add a new subscription
router.post('/', async (req, res) => {
  const subscription = new Subscription(req.body);
  await subscription.save();
  res.json(subscription);
});

module.exports = router;
