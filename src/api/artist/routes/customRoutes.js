module.exports = {
    routes: [
        { // Path defined with a URL parameter
            method: 'GET',
            path: '/artist/count',
            handler: 'artist.count',
        },
        {
            method: 'GET',
            path: '/artist/page/:Path',
            handler: 'artist-path.findOne',
            config: {
                auth: false,
            }
        }
    ]
}