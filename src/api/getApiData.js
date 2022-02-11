import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://dispex.org/api/vtest',
})

export const getApiData = async (url, queryParams = '') => {
  try {
    const { data } = await instance.get(url + queryParams)

    return data
  } catch (error) {
    console.log(error)
  }
}