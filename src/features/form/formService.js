import axios from 'axios'

const API_URL = 'http://localhost:8080/api/'

const formMobilBekas = async (data) => {
    const response = await axios.post(API_URL + 'mobil-bekas', data)

    return response.data
}

const formService = {
    formMobilBekas
}

export default formService