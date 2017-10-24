/**
 * QuoteController
 *
 * @description :: Server-side logic for managing quotes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	getQuote:(req, res)=>{
        return res.json({quote: quoter.getRandomOne()});
    },
    getProtectedOne:(req, res)=>{
        return res.json({quote: quoter.getRandomOne()});
    }
};

