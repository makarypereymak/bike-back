import { Low } from 'lowdb'
import { JSONFile } from 'lowdb/node'
import { dirname, resolve } from 'path'
import { fileURLToPath } from 'url'

export function createDbPersonConnecion () {
  const __dirname = dirname(fileURLToPath(import.meta.url));
  const file = resolve(__dirname, '..', 'persons.json');
  const adapter = new JSONFile(file);
  const db = new Low(adapter);
  return db;
}