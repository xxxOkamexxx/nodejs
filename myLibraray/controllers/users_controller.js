const Users = require('../models/Users');
const log = require('winston')('controller:book_title')

/*
 * CREATE
*/ 
const create = async(req, res) => {
    try {

        let user = await new Users(req.body).save();

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

        let user;
        if (req.params.id) {
            user = await Users.where({ "id" : req.params.id }).fetch({ require: false });
        } else {
            user = await Users.fetchAll();
        }

        if(!user) {
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

        let user = await Users.where({ "id" : req.params.id }).fetch({ require : ture });
        user = await user.set(req.body).save();

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

        let user = await Users.where({ "id" : req.params.id }).fetch({ require : ture });
        user = await user.destroy();

        return res.status(200).send(
            {
                success: true,
                data:{
                    user
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