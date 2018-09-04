const createDB = require('./createDB');
const createTables = require('./createTables');

async function setup() {
  await createDB.createDB();
  await createTables.createTables();
}
setup();
