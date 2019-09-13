const server = require('./api/server')

const port = process.env.PORT || 5000

server.listen(port, () => console.log(`Party time on port ${port}`))