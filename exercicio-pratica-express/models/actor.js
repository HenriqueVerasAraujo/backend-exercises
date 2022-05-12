const connection = require('./connection');


const getAllActors = async () => {
    const my_query = "SELECT CONCAT(first_name, ' ', last_name) as 'full_name' FROM sakila.actor LIMIT 10"
    const [allActors] = await connection.execute(my_query);
    return allActors;
}

const getSingleActor = async (firstName) => {
    const my_query = `SELECT  first_name, last_name FROM sakila.actor WHERE first_name LIKE '%${firstName}%' LIMIT 1`
    const [allActors] = await connection.execute(my_query, [firstName]);
    return allActors;
}

module.exports = {
    getAllActors,
    getSingleActor
};
