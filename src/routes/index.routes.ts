import express, {Router} from "express";
const {searchPlacesController} = require('../controllers/SearchPlacesController')
const router: Router = express.Router();
const validateDataRequest = require('../middlewares/validateDataRequest')


router.get("/searchByCoords",validateDataRequest, searchPlacesController);

module.exports = router;