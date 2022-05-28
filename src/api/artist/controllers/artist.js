'use strict';

/**
 *  artist controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::artist.artist', {
    count(ctx) {
        var { query } = ctx.request
        return strapi.query('api::artist.artist').count(query);
    }

});
