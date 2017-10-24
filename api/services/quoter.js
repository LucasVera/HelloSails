const quotes = require('./quotes.json');

module.exports.getRandomOne = ()=>{
    const totalAmont = quotes.length;
    let rand = Math.floor(Math.random() * totalAmont);
    return quotes[rand];
}