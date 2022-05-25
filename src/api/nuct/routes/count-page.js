module.exports = {
    routes: [
        { // Path defined with a URL parameter
            method: 'GET',
            path: '/nucts/count',
            handler: 'nuct.count',
        },
    ]
}