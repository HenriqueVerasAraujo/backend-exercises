const Actor = require('../models/actor')


const getAllActors = async (_req, res) => {
    const allData = await Actor.getAllActors();
    return res.status(200).json(allData);
}

const getSingleActor = async (req, res) => {
    const { name } = req.params;
    const allData = await Actor.getSingleActor(name);
    return res.status(200).json(allData);
}

module.exports = {
    getAllActors,
    getSingleActor
}