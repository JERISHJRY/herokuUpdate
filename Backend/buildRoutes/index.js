const express = require('express');

const router = express.Router();

// Swagger
const { swaggerUi, swaggerSpec } = require('../utils/swagger');

/**
 * Routes
 */
const api = require('./api');
const user = require('./user');
const email = require('./email');
const root = require('./root');
const push = require('./push');
const twilio = require('./twilio');
const cron = require('./cron');
const product = require('./product');

router.use('/api', api);
router.use('/user', user);
router.use('/email', email);
router.use('/', root);
router.use('/push', push);
router.use('/twilio', twilio);
router.use('/cron', cron);
router.use('/product', product);

// Enpoint serving API DOC using Swagger
router.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

module.exports = router;
