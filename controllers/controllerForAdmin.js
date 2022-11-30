import {createDbPersonConnecion} from '../dbConfigures/DbPersons.js'

class controllerForAdmin {
  async getPersons (req, res) {
    try {
      const db = createDbPersonConnecion();
      await db.read();

      res.status(200).json(db.data.persons);
    } catch (error) { 
      res.status(400).json({message: error});
    }
  }

  async deletePerson (req, res) {
    try {
      const db = createDbPersonConnecion();
      await db.read();
      const login = req.query.login;

      const newPersons = db.data.persons.filter((item) => item.login !== login);

      db.data.persons = newPersons;

      await db.write();

      res.status(200).json({message: "Delete succes"});
    } catch (error) { 
      res.status(400).json({message: error});
    }
  }

  async changeRole (req, res) {
    try {
      const db = createDbPersonConnecion();
      await db.read();

      const login = req.query.login;
      const newRole = req.query.newRole;

      const newPersons = db.data.persons.map((item) => {
        if (item.login === login) {
          item.role = newRole
        }
        return item;
      });

      db.data.persons = newPersons;

      await db.write();

      res.status(200).json({message: "Change role succes"});
    } catch (error) { 
      res.status(400).json({message: error});
    }
  }
  
  async changeLogin (req, res) {
    try {
      const db = createDbPersonConnecion();
      await db.read();
      const login = req.query.login;
      const newLogin = req.query.newLogin;

      const newPersons = db.data.persons.map((item) => {
        if (item.login === login) {
          item.login = newLogin
        }
        return item;
      });

      db.data.persons = newPersons;

      await db.write();

      res.status(200).json({message: "Login changed"});
    } catch (error) { 
      res.status(400).json({message: error});
    }
  }

  async addPerson (req, res) {
    try {
      const db = createDbPersonConnecion();
      await db.read();

      const person = req.body;

      db
      .data
      .persons
      .push(person);

      await db.write();

      res.status(200).json({message: "person created"});
    } catch (error) { 
      res.status(400).json({message: error});
    }
  }
}

export default new controllerForAdmin ()
