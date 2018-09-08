// const createDB = require('./createDB');
const createTables = require('./createTables');

function setup() {
  createTables.createTables();
}
setup();
