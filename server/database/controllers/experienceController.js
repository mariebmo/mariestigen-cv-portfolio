import {database} from "../database.js";


export {
    getExperiences,
    getExperiencesByType,
    getExperience,
    addExperience,
    updateExperience,
    deleteExperience
};

async function getExperiences(req, res) {

    try {
        const result = await database.query('SELECT * FROM experience;')
        return res.status(200).json({experience: result});
    } catch (err) {
        return res.status(500).json({message: err.message ? err.message : "something went wrong"})
    }
}

async function getExperiencesByType(req, res) {

    try {
        const result = await database.query('SELECT * FROM experience WHERE type_id = $1;', [req.params.typeId])
        return res.status(200).json({experience: result});
    } catch (err) {
        return res.status(500).json({message: err.message ? err.message : "something went wrong"})
    }
}

async function getExperience(req, res) {
    try {
        const result = await database.query('SELECT * FROM experience WHERE experience_id = $1;', [req.query.id])
        return res.status(200).json({experience: result});
    } catch (err) {
        return res.status(500).json({message: err.message ? err.message : "something went wrong"})
    }
}

async function addExperience(req, res) {

    try {
        await database.query("INSERT INTO experience (experience_title, experience_place, experience_info, experience_from, experience_to, experience_tags, type_id) VALUES ($1, $2, $3, $4, $5, $6, $7)", [req.body.title, req.body.place, req.body.info, req.body.from, req.body.to, req.body.tags, req.body.typeId])
        return res.status(201).json({message: "Experience created successfully!"});
    } catch (err) {
        return res.status(500).json({message: err.message ? err.message : "something went wrong"})
    }
}

async function updateExperience(req, res) {
    try {
        await database.query("UPDATE experience SET experience_title = $1, experience_place = $2, experience_info = $3, experience_from = $4, experience_to = $5, experience_tags = $6, type_id = $7 WHERE experience_id = $8", [req.body.title, req.body.place, req.body.info, req.body.from, req.body.to, req.body.tags, req.body.typeId, req.body.id])
        return res.status(201).json({message: "Experience updated successfully!"});
    } catch (err) {
        return res.status(500).json({message: err.message ? err.message : "something went wrong"})
    }
}

async function deleteExperience(req, res){
    try {
        await database.query("DELETE FROM experience WHERE experience_id = $1", [req.query.id])
        return res.status(201).json({message: "Experience deleted successfully!"});
    } catch (err) {
        return res.status(500).json({message: err.message ? err.message : "something went wrong"})
    }
}