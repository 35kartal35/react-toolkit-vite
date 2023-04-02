import axios from 'axios'

export default function useApi() {
    axios.defaults.baseURL = "https://api.adoptez1artisan.com"

    return axios
}