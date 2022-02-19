import { typesSearchPlacesRequest } from '../interfaces/typesSearchPlacesRequest';

//Valida información del request
const validateDataRequest = (req: any, res: any, next: any) => {

    const dataRequest: typesSearchPlacesRequest = req.body

    if (dataRequest.lat.length === 0 && dataRequest.lon.length === 0) {
        res.status(500).json(
            {
                message: 'Las propiedades lat y lon no pueden enviarse vacías.',
                error: true
            }
        );

    } else {
        next();
    }
};

module.exports = {validateDataRequest}