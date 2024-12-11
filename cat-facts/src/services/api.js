import axios from 'axios'

const api = axios.create({
  baseURL: 'https://catfact.ninja/'
})

export default api