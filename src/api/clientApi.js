import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://dispex.org/api/vtest',
})

export const clientApi = async (url, method, obj) => {
  try {
    const res = await instance[method](url, obj)

    return res
  } catch (error) {
    console.log(error)
  }
}
