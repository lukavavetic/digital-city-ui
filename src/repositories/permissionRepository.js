import axios from 'axios'

export default  {
    list() {
        return axios
            .get('permission.list')
            .then((response) => {
                return response.data.data;
            })
    },
    info($identifier) {
        return axios
            .get('permission.info', {
                params: {
                    identifier: $identifier
                }
            })
            .then((response) => {
                return response.data.data;
            })
    },
    create($body) {
        return axios
            .post('permission.create', $body);
    },
    update($body) {
        return axios
            .post('permission.update', $body);
    }
}