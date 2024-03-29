import express from 'express';
import User from '../models/User';

const router = express.Router();

router.get('/', async (req, res) => {
    try {
      const users = await User.find();
      res.json(users);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });
  
  router.post('/', async (req, res) => {
    const user = new User({
      username: req.body.username,
      password: req.body.password,
    });
  
    try {
      const newUser = await user.save();
      res.status(201).json(newUser);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  });
  
  router.patch('/:id', async (req, res) => {
    try {
      const user = await User.findById(req.params.id);
      if (user == null) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      if (req.body.username != null) {
        user.username = req.body.username;
      }
  
      if (req.body.password != null) {
        user.password = req.body.password;
      }
  
      const updatedUser = await user.save();
      res.json(updatedUser);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  });
  
  router.delete('/:id', async (req, res) => {
    try {
      await User.findByIdAndDelete(req.params.id);
      res.json({ message: 'User deleted' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });

module.exports = router;
