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

// module.export = createCoreController('api::nuct.nuct', ({ strapi }) => ({
//     count(ctx) {
//         var { query } = ctx.request
//         return strapi.query('api::nuct.nuct').count(query);
//     },

//     async findOne(ctx) {
//         const { slug } = ctx.params;

//         const entity = await strapi.db.query('api::nuct.nuct').findOne({
//             where: { slug }
//         });

//         const sanitizedEntity = await this.sanitizedOutput(entity);

//         return this.transform.Response(sanitizedEntity);
//     }

// }));