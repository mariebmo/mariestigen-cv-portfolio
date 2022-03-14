const {database} = require("../database.js");


module.exports = {
    getTypes,
    getType,
    addType,
    updateType,
    deleteType
};

async function getTypes(req, res) {
    try {
        const result = await database.query('SELECT * FROM type;')
        return res.status(200).json({type: result});
    } catch (err) {
        return res.status(500).json({message: err.message ? err.message : "something went wrong"})
    }
}

async function getType(req, res) {
    try {
        const result = await database.query('SELECT * FROM type WHERE type_id = $1;', [req.query.id])
        return res.status(200).json(result);
    } catch (err) {
        return res.status(500).json({message: err.message ? err.message : "something went wrong"})
    }
}

async function addType(req, res) {

    try {
        console.log(req.body)
        await database.query("INSERT INTO type (type_name) VALUES ($1)", [req.body.type])
        return res.status(201).json({message: "Type created successfully!"});
    } catch (err) {
        return res.status(500).json({message: err.message ? err.message : "something went wrong"})
    }
}

async function updateType(req, res) {
    try {
        await database.query("UPDATE type SET type_name = $1 WHERE type_id = $2", [req.body.type, req.body.id])
        return res.status(201).json({message: "Type updated successfully!"});
    } catch (err) {
        return res.status(500).json({message: err.message ? err.message : "something went wrong"})
    }
}

async function deleteType(req, res){
    try {
        await database.query("DELETE FROM type WHERE type_id = $1", [req.query.id])
        return res.status(201).json({message: "Type deleted successfully!"});
    } catch (err) {
        return res.status(500).json({message: err.message ? err.message : "something went wrong"})
    }
}