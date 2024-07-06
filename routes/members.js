const express = require('express');
const Member = require('../models/Member');
const router = express.Router();

// Get all members
router.get('/', async (req, res) => {
  const members = await Member.find();
  res.json(members);
});

// Add a new member
router.post('/', async (req, res) => {
  const member = new Member(req.body);
  await member.save();
  res.json(member);
});

module.exports = router;
