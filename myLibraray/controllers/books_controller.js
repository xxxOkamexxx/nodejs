const Books = require('../models/Books');
const log = require('winston')('controller:book')

/*
 * CREATE
*/ 
const create = async(req, res) => {
    try {

        let book = await new Books(req.body).save();

        return res.status(201).send(
            {
                success: true,
                data:{
                    title
                }
            }
        );

    } catch (err) {
        log('Create failed: %s', err.message);
        return res.status(500).send(
            {
                success: false,
                data: err.message
            }
        );
    }
}

/*
 * READ
*/ 
const read = async(req, res) => {
    try {

        let book;
        if (req.params.id) {
            book = await Books.where({ "id" : req.params.id }).fetch({ require: false });
        } else {
            book = await Books.fetchAll();
        }

        if(!book) {
            return res.status(400).send({
                success: false,
                data: "Not found"
            });
        }

        return res.status(200).send({
            success: true,
            data: {
                title
            }
        });

    } catch (err) {
        log('Read failed %s', err.message);
        return res.status(500).send({
            success: false,
            data: err.message
        });
    }
}

/*
 * UPDATE
*/ 
const update = async(req, res) => {
    try {

        let book = await Books.where({ "id" : req.params.id }).fetch({ require : ture });
        book = await book.set(req.body).save();

        return res.status(200).send(
            {
                success: true,
                data:{
                    title
                }
            }
        );

    } catch (err) {
        log('Update failed: %s', err.message);
        return res.status(500).send(
            {
                success: false,
                data: err.message
            }
        );
    }
}

/*
 * DELETE
*/ 
const destroy = async(req, res) => {
    try {

        let book = await Books.where({ "id" : req.params.id }).fetch({ require : ture });
        book = await book.destroy();

        return res.status(200).send(
            {
                success: true,
                data:{
                    book
                }
            }
        );

    } catch (err) {
        log('Delete failed: %s', err.message);
        return res.status(500).send(
            {
                success: false,
                data: err.message
            }
        );
    }
}


module.exports = {
    create,
    read,
    update,
    destroy
}