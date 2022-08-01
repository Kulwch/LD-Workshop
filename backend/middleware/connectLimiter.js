/**
 * accountLimiter - middleware
 * 
 * Blocks connections attempts after 5 requests within the same hour. Prevents from brute-force attacks.
 * Set with @express-rate-limit
 */

const rateLimit = require("express-rate-limit");

const ConnectAccountLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, 
  max: 10, 
  message:
    "10 tentatives de connexion à partir de IP, merci de réessayer d'ici une heure",
  headers: true
});

module.exports = ConnectAccountLimiter;