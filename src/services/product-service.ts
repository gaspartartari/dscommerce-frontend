import axios, { AxiosRequestConfig } from "axios";
import { BASE_URL } from "../utils/system";


export function findAll( page: number, name: string, size = 12, sort = "name" ) {

    const config : AxiosRequestConfig = ({
        method: 'get',
        baseURL: `${BASE_URL}/products`,
        params: {
            page,
            name,
            size,
            sort
        }
      })


    return axios(config);
}



export function findById(id: number) {
    return axios.get(`${BASE_URL}/products/${id}`);

}

