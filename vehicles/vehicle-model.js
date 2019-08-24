const db = require('../database/dbconfig.js');

module.exports = {
  add,
  deleteVehicle,
  findById,
  findBy,
  findUsersVehicles,
  updateVehicle
};

async function add(vehicle) {
  const [id] = await db('vehicle').insert(vehicle, 'id');

  return findById(id);
}

function findById(id) {
  return db('vehicle')
    .where({ id })
    .first();
}

function findBy(filter) {
  return db('vehicle').where(filter);
}

function findUsersVehicles(user_id) {
  return db('vehicle').where({ user_id });
}

function updateVehicle(id, changedVehicle) {
  return db('vehicle')
    .where({ id })
    .update(changedVehicle);
}

function deleteVehicle(id) {
  return db('vehicle')
    .where({ id })
    .del();
}
