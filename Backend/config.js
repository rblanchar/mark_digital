require('dotenv').config();

module.exports = {
    app: {
      port: process.env.PORT || 3000,
    },
    mysql: {
      host: process.env.MYSQL_HOST || 'localhost',
      user: process.env.MYSQL_USER || 'root',
      port: process.env.MYSQL_PORT || 3306,  
      password: process.env.MYSQL_PASSWORD || '7571R3995b',
      database: process.env.MYSQL_DB || 'MarketingDigital'
    },
    jwtSecret: process.env.JWT_SECRET || 'default_secret_key'
};
