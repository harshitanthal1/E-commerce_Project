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
  
  router.post('/', async (req, res) => {
    const product = new Product({
      name: req.body.name,
      description: req.body.description,
      price: req.body.price,
      image: req.body.image,
    });
  
    try {
      const newProduct = await product.save();
      res.status(201).json(newProduct);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  });
  
  router.patch('/:id', async (req, res) => {
    try {
      const product = await Product.findById(req.params.id);
      if (product == null) {
        return res.status(404).json({ message: 'Product not found' });
      }
  
      if (req.body.name != null) {
        product.name = req.body.name;
      }
  
      if (req.body.description != null) {
        product.description = req.body.description;
      }
  
      if (req.body.price != null) {
        product.price = req.body.price;
      }
  
      if (req.body.image != null) {
        product.image = req.body.image;
      }
  
      const updatedProduct = await product.save();
      res.json(updatedProduct);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  });
  
  router.delete('/:id', async (req, res) => {
    try {
      await Product.findByIdAndDelete(req.params.id);
      res.json({ message: 'Product deleted' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });

module.exports = router;
