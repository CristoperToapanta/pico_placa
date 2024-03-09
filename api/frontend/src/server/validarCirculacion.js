import initConfig from "../configs/initConfig";
import axios from 'axios';

const VALIDAR_URL = initConfig.host + "/ejecutar/validarCirculacion";

export function validar_circulacion(data) {

    return axios.post(`${VALIDAR_URL}`, data, {timeout:5000})
        .then(r=> r) 
        .catch(err => err)

}
