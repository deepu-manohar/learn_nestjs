import { rm } from 'fs/promises';
import { join } from 'path';

global.beforeEach(async () => {
  try {
    const dbFile = join(__dirname, '..', 'test.sqlite');
    console.log(dbFile);
    await rm(dbFile);
  } catch (err) {}
});
