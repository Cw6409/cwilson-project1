const express = require('express');
const router = express.Router();
const feedController = require('../controllers/feedController');


router.get('/', feedController.getAllFeedItems);
router.post('/', feedController.saveFeedItem);
router.get('/:id', feedController.getFeedItemById);
router.delete('/:id', feedController.deleteFeedItemById);
router.patch('/:id', feedController.updateFeedItemById);

module.exports = router;

