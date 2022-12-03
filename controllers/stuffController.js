'use strict';

const db = require('../models');

exports.getStuff = async (ctx) => {
    try {
        ctx.body = await db.Stuff.findAll();
        ctx.status = 200;
    } catch (err) {
        ctx.body = err;
        ctx.status = 500;
    }
};

function deconstructStuff(body) {
    let stuff = {};
    stuff.stufftype = body.stuffType;
    stuff.stuffgood = body.stuffGood;
    stuff.stuffamount = body.stuffAmount;
    return stuff
}

exports.postStuff = async (ctx) => {
    try {
        let stf = deconstructStuff(ctx.request.body)
        await db.Stuff.create(stf);
        ctx.status = 201;
    } catch (err) {
        ctx.body = err;
        ctx.status = 500;
    }
};