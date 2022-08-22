import axios from 'axios'
import api from '../../utils/api'

const API_URL = api

const formMobilBekas = async (data, token) => {

    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const response = await axios.post(API_URL + 'mobil-bekas', data, config)

    return response.data
}

const formService = {
    formMobilBekas
}

export default formService