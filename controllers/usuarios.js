const {response, request} = require('express')

const usuarioGet = ( req = request, res = response ) => {

    const query = req.query;
    const {q, nombre = 'no name', apikey, page =  1 } = req.query;

    res.json({
        msg : "get API - Controlador",
        query :  query,
        nombre :  nombre,
        q:q,
        key: apikey,
        pagina :  page
    });
}


const usuarioPost =  ( req, res ) => {

    const {nombre, edad} =  req.body;
    console.log(nombre, edad, req.body);

    res.json({
        msg : "post API - Controlador !!",
        nombre : nombre,
        edad : edad,
        body: req.body
    });
}

const usuarioPut = ( req, res ) => {

    const {id} = req.params;

    res.json({
        msg : "put API  - Controlador",
        id: id
    });
}


const usuarioDelete = ( req, res ) => {
    res.json({
        msg : "delete API  - Controlador"
    });
}

const usuarioPatch = ( req, res ) => {
    res.json({
        msg : "patch API  - Controlador"
    });
}

module.exports = {
    usuarioGet,
    usuarioPost,
    usuarioPut,
    usuarioDelete,
    usuarioPatch
}