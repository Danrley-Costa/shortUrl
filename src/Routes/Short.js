'use strict';
const express = require('express');
const router = express.Router();
//const controller = require('../Controllers/Short')
const Url = require("../Models/Url");

router.post("/", async (req, res) => {
    const { url, expire } = req.body;
  
    if (!url) return res.send({ error: "url inválida" });
  
    if (await Url.findOne({ url })) {
      let urlCreated = await Url.find({ url ,expire }, "shortUrl"); 
  
      return res.status(200).json(urlCreated);
    }
  
    try {
      const newUrl = await Url.create(req.body);
  
      return res.status(201).json(newUrl);
    } catch (err) {
      return res
        .status(500)
        .send({ error: "Erro ao criar um novo usúario!" + err });
    }
  });

module.exports = router;