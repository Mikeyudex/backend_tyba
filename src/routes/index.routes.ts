import express, {Router} from "express";
/* import ControllerService from "../controllers/index.controller"; */
/* import { AssignOrdersController } from "../controllers/AssignOrder.controller"; */

/* const controllerService : ControllerService = new ControllerService();
const assignOrdersController : AssignOrdersController = new AssignOrdersController(); */

const router: Router = express.Router();

/* router.post("/managementImports", controllerService.importFile);
router.post("/assign-orders", assignOrdersController.receivedPayload); */

module.exports = router;