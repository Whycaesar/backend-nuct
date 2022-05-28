'use strict';

/**
 *  nuct controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::nuct.nuct', ({strapi}) => ({
    async findOne(ctx) {
        const { Slug } = ctx.params;

        const entity = await strapi.db.query('api::nuct.nuct').findOne({
            where: { Slug }
        });

        const sanitizedEntity = await this.sanitizeOutput(entity);

        return this.transformResponse(sanitizedEntity);
    }

}));