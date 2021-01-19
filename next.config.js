const nextRuntimeDotenv = require('next-runtime-dotenv');
const nextTranslate = require('next-translate');

const env = require('./env');

const withConfig = nextRuntimeDotenv({
  public: env.public,
  server: env.server,
});

module.exports = nextTranslate(withConfig());
