async function client(method, endpoint, body, customConfig = {}, clientConfig = {}) {
    let headers = {}

    const config = {
        method: method,
        ...customConfig,
        headers: {
            ...headers,
            ...customConfig.headers,
        },
    }

    if (body) {
        config.body = JSON.stringify(body)
    }

    let data
    try {
        const response = await window.fetch(endpoint, config)
        if (response.ok) {
            console.log(response)
            if (response.headers.get('content-type').indexOf('application/json') >= 0){
                data = await response.json()
            }
            else if (clientConfig.download) {
                data = await response.blob()
            } else {
                data = await response.text()
            }

            // Return a result object similar to Axios
            return {
                status: response.status,
                data,
                headers: response.headers,
                url: response.url,
            }
        }
        throw new Error(response.statusText)
    } catch (err) {
        console.error(err)
        return Promise.reject(err.message ? err.message : data)
    }
}

client.get = function (endpoint, customConfig = {}, clientConfig = {}) {
    return client("GET", endpoint, null, customConfig, clientConfig)
}

client.post = function (endpoint, body, customConfig = {}) {
    return client("POST", endpoint, body, customConfig)
}

export default client
