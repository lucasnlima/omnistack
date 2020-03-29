const connection = require('../database/connection');
const crypto = require('crypto');


module.exports = {
/*
route: [GET] /ongs : Get ongs
params: 
response: Return all ongs
*/
async index(request,response) {
    
    const ong = await connection('ongs').select('*');

    response.json({ong});
},


    /*
route: [POST] /ongs : Create a new ong
params:
response: Return ID of created ONG
*/
async create(request,response) {

    const {name, email, whatsapp, city, uf} = request.body;

    const id = crypto.randomBytes(4).toString('HEX');

    await connection('ongs').insert({
        id,
        name,
        email,
        whatsapp,
        city,
        uf,
    })

    response.json({id});
}
};