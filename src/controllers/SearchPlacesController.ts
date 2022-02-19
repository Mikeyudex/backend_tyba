import { Response } from 'express';
import { SearchPlacesService } from '../services/SearchPlacesService';
import { typesSearchPlacesRequest } from '../interfaces/typesSearchPlacesRequest';

const searchPlacesService: SearchPlacesService = new SearchPlacesService();

const searchPlacesController = async (req: any, res: Response) => {

    try {
        let typesRequest : typesSearchPlacesRequest = req.body;
        let responseService:any = await searchPlacesService.searchByCoords(typesRequest)
        res.status(200).json(
            {
                message: responseService,
                error: false
            }
        )

    } catch (error) {
        console.log(error)
        res.status(500).json(
            {
                message: "Ha ocurrido un error interno",
                error: true
            }
        )
    }

}

module.exports = {
    searchPlacesController
}