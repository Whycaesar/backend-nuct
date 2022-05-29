'use strict';

/**
 *  artist controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::artist.artist', ({strapi}) => ({
    async findOne(ctx) {
        
        const { Path } = ctx.params;

        const entity = await strapi.db.query('api::artist.artist').findOne({
            where: { Path },
        });

        const sanitizedEntity = await this.sanitizeOutput(entity);

        return this.transformResponse(sanitizedEntity);
    }

}));
