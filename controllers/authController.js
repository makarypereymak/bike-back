import {createDbPersonConnecion} from '../dbConfigures/DbPersons.js'

class authController {
  async registration(req, res) {
    try {
      const { login, pass } = req.body;
      const db = createDbPersonConnecion();
      await db.read();
      const person = {
        login: login, 
        pass: pass,
        role: "user",
        favoritesStations: []
      };

      db
        .data
        .persons
        .push(person);

      await db.write();

      res.status(200).json(person);
    } catch (error) { 
      res.status(400).json({message: `Registration error ${error}`});
    }
  }

  async login(req, res) {
    try {
      const { login, pass } = req.body;
      const db = createDbPersonConnecion();
      await db.read();
      const person = db.data.persons.find(item => item.login === login)
      if (person) {
        if (person.pass === pass) {
          res.status(200).json(person);
        } else {
          res.status(400).json({message: `Invalid password`});
        }
      } else {
        res.status(400).json({message: `No one users with this login:${login}`});
      }
    } catch (error) {
      res.status(400).json({message: `Login error ${error}`});
    }
  }
}

export default new authController ()
