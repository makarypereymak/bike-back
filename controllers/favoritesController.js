import { createDbPersonConnecion } from "../dbConfigures/DbPersons.js";

class favoritesController {
  async addFavoriteStation(req, res) {
    try {
      const db = createDbPersonConnecion();
      await db.read();

      const station = req.body;
      const login = req.query.login;

      const person = db.data.persons.find((item) => item.login === login);
      person.favoritesStations.push(station);

      await db.write();

      res.status(200).json("ok");
    } catch (error) {
      res.status(400).json({ message: error });
    }
  }

  async deleteFavoriteStation(req, res) {
    try {
      const db = createDbPersonConnecion();
      await db.read();

      console.log(1);

      const login = req.query.login;
      const idFavorite = req.query.idFavorite;


      const person = db.data.persons.find((item) => item.login === login);
      const newFavoriteStations = person.favoritesStations.filter(item =>
        item.id !== idFavorite
      );

      person.favoritesStations = newFavoriteStations;

      await db.write();

      res.status(200).json("ok");
    } catch (error) {
      res.status(400).json({ message: error });
    }
  }
}

export default new favoritesController();
