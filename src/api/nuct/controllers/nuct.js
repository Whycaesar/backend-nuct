'use strict';

/**
 *  nuct controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::nuct.nuct', {
    count(ctx) {
        var { query } = ctx.request
        return strapi.query('api::nuct.nuct').count(query);
    },
    
});

