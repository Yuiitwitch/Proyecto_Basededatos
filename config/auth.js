module.exports = {
    secret: process.env.AUTH_SECRET || "trololo", //key used to encrypt
    expires: process.env.AUTH_EXPIRES || "24h",  //token duration
    rounds: process.env.AUTH_ROUNDS || 10 // encryption difficulty
}