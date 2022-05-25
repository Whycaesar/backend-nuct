'use strict';

/**
 * nuct service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::nuct.nuct');
