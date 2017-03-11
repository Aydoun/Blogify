const config = {
  mongoURL: process.env.MONGO_URL || 'mongodb://localhost:27017/Blog',
  port: 8000,
  hostname: 'localhost'
};

module.exports = config;
