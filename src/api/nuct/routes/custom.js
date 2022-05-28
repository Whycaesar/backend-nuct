module.exports = {
    routes: [
        { // Path defined with a URL parameter
            method: 'GET',
            path: '/nucts/count',
            handler: 'nuct.count',
        },
        {
            method: 'GET',
            path: '/nucts/:Slug',
            handler: 'nuct-path.findOne',
            config: {
                auth: false,
            }
        }
    ]
}