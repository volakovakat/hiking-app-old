import client from './client'

const dataApi = {
    getData: async () => {
        return await client.get('/data/trips.json')
    }
}

export default dataApi
