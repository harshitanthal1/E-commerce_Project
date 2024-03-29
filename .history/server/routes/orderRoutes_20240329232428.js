import express from 'express';
const router = express.Router();
import Order from '../models/Order';

router.get('/', async (req, res) => {
    try {
      const orders = await Order.find();
      res.json(orders);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });
  
  router.post('/', async (req, res) => {
    const order = new Order({
      user: req.body.user,
      products: req.body.products,
      totalPrice: req.body.totalPrice,
    });
  
    try {
      const newOrder = await order.save();
      res.status(201).json(newOrder);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  });
  
  router.patch('/:id', async (req, res) => {
    try {
      const order = await Order.findById(req.params.id);
      if (order == null) {
        return res.status(404).json({ message: 'Order not found' });
      }
  
      if (req.body.user != null) {
        order.user = req.body.user;
      }
  
      if (req.body.products != null) {
        order.products = req.body.products;
      }
  
      if (req.body.totalPrice != null) {
        order.totalPrice = req.body.totalPrice;
      }
  
      const updatedOrder = await order.save();
      res.json(updatedOrder);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  });
  
  router.delete('/:id', async (req, res) => {
    try {
      await Order.findByIdAndDelete(req.params.id);
      res.json({ message: 'Order deleted' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });
  

module.exports = router;
