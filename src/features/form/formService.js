import axios from 'axios'

const API_URL = 'https://usedup.herokuapp.com/api/'

const user = localStorage.getItem('user')

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