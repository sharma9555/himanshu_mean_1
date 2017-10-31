const crypto = require('crypto').randomBytes(256).toString('hex');

module.exports = {
  uri: 'mongodb://localhost:27017/Mean_stack_db',
  secret: crypto,
  db:'Mean_stack_db'
}