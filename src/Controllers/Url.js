'use strict';

const mongoose = require('mongoose');
const Url = mongoose.model('Url')

//Rota que lista todos as URLs
exports.get = (req, res, next) => {
    Url
        .find({})
        .then(data => {
            res.status(200).send(data);
        }).catch(e => {
            res.status(400).send(e);
        });
};

// Rota que acessa a documentação
exports.getDoc = (req, res, next) => {
    res.status(200).redirect("https://app.swaggerhub.com/apis-docs/Ley/ShortUrl/1.0.0#/");
};


// Rota que busca uma URL e envia para o destino
exports.getByShort = (req, res, next) => {
    let short = req.params.short;
    if (!short) return res.status(403).end({ error: "Id inválido!" });
    Url
    .findOne({short:short})
    .then(data => {
        let now = new Date();
        let expire = data.expire;
        
        if(expire < now ) {
            res.status(403).send({
                error: "Url Expirada",
                data_expire:expire, 
                data_atual:now 
            });
        }
        res.status(200).redirect(data.url);
    }).catch(e => {
        res.status(404).send({ error: "Erro ao buscar o Id", status: 404 });
    });
};

exports.delete = (req, res, next) => {
    Url
    .findByIdAndRemove(req.params.id)
    .then(x => {
        res.status(200).send({ 
            message: "Url removida" 
        });
    }).catch(e => {
        res.status(400).send({ 
            message: "Falha ao remover a Url" ,
            data: e
        });
    });
};



