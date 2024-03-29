import express from 'express';
import Product from '../models/Product';

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Add more routes for product CRUD operations as needed

module.exports = router;
