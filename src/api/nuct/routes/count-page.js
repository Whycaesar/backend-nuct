module.exports = {
    routes: [
        { // Path defined with a URL parameter
            method: 'GET',
            path: '/nucts/count',
            handler: 'nuct.count',
        },
        {
            method: 'GET',
            path: '/nucts/:Path',
            handler: 'custom-route-nuct.findOne',
            config: {
                auth: false,
            }
        }
    ]
}