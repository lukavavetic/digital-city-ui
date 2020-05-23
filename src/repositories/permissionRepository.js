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
    create($data) {
        return axios
            .post('permission.create', $data);
    },
    update($data) {
        return axios
            .post('permission.update', $data);
    },
    delete($identifier) {
        return axios
            .post('permission.delete', {
                    identifier: $identifier
            })
    }
}