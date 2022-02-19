import axios, { AxiosRequestConfig } from "axios";
const configs: configsTypes = require('../configs/confs')
import { configsTypes } from '../configs/confs'


export class SearchPlacesService {

  public async searchByCoords() {

    return new Promise((resolve, reject) => {

      let config: AxiosRequestConfig = {
        method: 'get',
        url: `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670522%2C151.1957362&radius=1500&type=restaurant&keyword=cruise&key=${configs.APIKEY}`,
        headers: {}
      };

      axios(config)
        .then((response) => {
          console.log(JSON.stringify(response.data));
          resolve(response.data)
        })
        .catch((error) => {
          console.log(error);
          reject(error)
        });
    })
  }
}