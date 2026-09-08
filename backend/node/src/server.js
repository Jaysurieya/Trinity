const { server } = require('./app');

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
    console.log(`Server is running in ${process.env.NODE_ENV} mode on port ${PORT}`);
    console.log(`Health check: http://localhost:${PORT}/health`);
    console.log(`Socket.IO ready on ws://localhost:${PORT}`);
});