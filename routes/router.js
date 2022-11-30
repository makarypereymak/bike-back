import authController from '../controllers/authController.js';
import controllerForAdmin from '../controllers/controllerForAdmin.js';
import favoritesController from '../controllers/favoritesController.js';
import express from 'express';

const router = express.Router();

router.post("/registration", authController.registration);
router.post("/login", authController.login);
router.get("/getPersons", controllerForAdmin.getPersons);
router.delete("/deletePerson", controllerForAdmin.deletePerson);
router.put("/changeLogin", controllerForAdmin.changeLogin);
router.put("/changeRole", controllerForAdmin.changeRole);
router.post("/addPerson", controllerForAdmin.addPerson);
router.post("/addFavoriteStation", favoritesController.addFavoriteStation)
router.delete("/deleteFavorite", favoritesController.deleteFavoriteStation)
 
export default router  