// const createDB = require('./createDB');
const createTables = require('./createTables');

async function setup() {
  createTables.createTables();
}
setup();
