import axios from 'axios'

export default  {
    list() {
        return axios
            .get('permission.list')
            .then((response) => {
                return response.data.data;
            })
    }
}