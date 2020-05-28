import axios from 'axios'

export default  {
    list() {
        return axios
            .get('user.list')
            .then((response) => {
                return response.data.data;
            })
    },
    info($identifier: string) {
        return axios
            .get('user.info', {
                params: {
                    identifier: $identifier
                }
            })
            .then((response) => {
                return response.data.data;
            })
    },
    create($data: object) {
        return axios
            .post('user.create', $data);
    },
    update($data: object) {
        return axios
            .post('user.update', $data);
    },
    delete($identifier: string) {
        return axios
            .post('user.delete', {
                identifier: $identifier
            })
    }
}