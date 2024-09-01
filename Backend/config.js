require('dotenv').config();

module.exports = {
    app: {
      port: process.env.PORT || 3000,
    },
    mysql: {
      host: process.env.mysql_host || 'localhost',
      user: process.env.mysql_user || 'root',
      password: process.env.mysql_password || '7571R3995b',
      database: process.env.mysql_db || 'MarketingDigital'
    },
  jwtSecret: process.env.JWT_SECRET || 'default_secret_key'
  }
  