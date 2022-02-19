import { Response } from 'express';
import { SearchPlacesService } from '../services/SearchPlacesService';

const searchPlacesService: SearchPlacesService = new SearchPlacesService();

const searchPlacesController = async (req: any, res: Response) => {

    try {

        let responseService:any = await searchPlacesService.searchByCoords()
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