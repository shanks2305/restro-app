const router = require('express').Router();
const Item = require('../model/items');
const { isAuthenticated, isAdmin } = require('../middleware');

router.get('/', async (req, res) => {
  try {
    const items = await Item.find({}).exec();
    res.status(200).json(items);
  } catch (error) {
    res.status(400).json(error);
  }
});

router.post('/addItem', isAuthenticated, isAdmin, async (req, res) => {
  const { name, price, img } = req.body;
  const item = new Item({
    name, price, img,
  });
  try {
    const saveItem = await item.save();
    res.status(200).json(saveItem);
  } catch (error) {
    res.status(400).json(error);
  }
});

router.delete('/deleteItem/:itemId', isAuthenticated, isAdmin, async (req, res) => {
  const id = req.params.itemId;
  try {
    const deletedItem = await Item.remove({ _id: id });
    res.status(200).json({
      message: 'Deleted the item',
      deletedItem,
    });
  } catch (error) {
    res.status(400).json(error);
  }
});

router.put('/updateItem/:itemId', isAuthenticated, isAdmin, async (req, res) => {
  const { name, price, img } = req.body;
  const id = req.params.itemId;
  try {
    const updateItem = await Item.replaceOne({ _id: id }, { name, price, img });
    res.status(200).json(updateItem);
  } catch (error) {
    res.status(400).json(error);
  }
});

module.exports = router;
