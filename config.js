const env = process.env.NODE_ENV;

const dev = {
  "JWT_KEY": "secretKey"
};

const test = {
  "JWT_KEY": "secretKey_test"
};

const config = {
  dev,
  test
};

module.exports = config['dev'];