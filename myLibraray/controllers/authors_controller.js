const Authors = require('../models/Authors');

/*
 * CREATE
*/ 
const create = async(req, res) => {
    try {

        let author = await new Authors(req.body).save();

        return res.status(201).send(
            {
                success: true,
                data:{
                    author
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

        let author;
        if (req.params.id) {
            author = await Authors.where({ "id" : req.params.id }).fetch({ require: false });
        } else {
            author = await Authors.fetchAll();
        }

        if(!author) {
            return res.status(400).send({
                success: false,
                data: "Not found"
            });
        }

        return res.status(200).send({
            success: true,
            data: {
                author
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

        let author = await Authors.where({ "id" : req.params.id }).fetch({ require : ture });
        author = await author.set(req.body).save();

        return res.status(200).send(
            {
                success: true,
                data:{
                    author
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

        let author = await Authors.where({ "id" : req.params.id }).fetch({ require : ture });
        author = await author.destroy();

        return res.status(200).send(
            {
                success: true,
                data:{
                    author
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