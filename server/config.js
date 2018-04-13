module.exports = {
  AUTH0_DOMAIN: 'gtportal.auth0.com', // e.g., kmaida.auth0.com
  AUTH0_API_AUDIENCE: 'http://localhost:8083/api/', // e.g., 'http://localhost:8083/api/'
  MONGO_URI: process.env.MONGO_URI || 'mongodb://<dbuser>:<dbpassword>@ds143039.mlab.com:43039/gtportal'
};