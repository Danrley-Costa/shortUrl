'use strict';

const mongoose = require('mongoose');
const shortid = require('shortid');
const Schema = mongoose.Schema;
const mongooseUrl = require('mongoose-type-url')


const schema = new Schema({
    url: { 
        type: mongoose.SchemaTypes.Url, 
        required: true, 
        lowercase: true
    },
    short: { 
        type: String, 
        default: shortid.generate, 
        unique: true 
    },
    shortUrl: { 
        type: mongoose.SchemaTypes.Url, 
        unique: true 
    },
    created: { 
        type: Date, 
        default: Date.now
    },
    expire: { 
        type: Date, 
        required: true 
    }
})

schema.pre('save', async function(next) {
    let url = this;
    let expire = this;
    url.short = await url.short.replace(/([^A-Za-z0-9])/, '').slice(1,6);
    url.shortUrl = await `http://localhost:5000/${url.short}`
    url.expire = url.expire
    return next()
})

module.exports = mongoose.model('Url', schema);