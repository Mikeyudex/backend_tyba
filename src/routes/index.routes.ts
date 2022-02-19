import express, {Router} from "express";
const searchPlacesController = require('../controllers/SearchPlacesController')
const router: Router = express.Router();

router.get("/searchByCoords", searchPlacesController);


module.exports = router;