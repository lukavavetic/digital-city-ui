import api from 'axios'
import {
    PermissionInfoRequestMapper,
    PermissionCreateRequestMapper,
    PermissionUpdateRequestMapper,
    PermissionDeleteRequestMapper
} from "@/types/PermissionRequestMappers";

export default  {
    list() {
        return api
            .get('permission.list')
            .then((response) => {
                return response.data.data;
            })
    },
    info($mapper: PermissionInfoRequestMapper) {
        return api
            .get('permission.info', {
                params: {
                    identifier: $mapper.identifier
                }
            })
            .then((response) => {
                return response.data.data;
            })
    },
    create($mapper: PermissionCreateRequestMapper) {
        return api
            .post('permission.create', $mapper);
    },
    update($mapper: PermissionUpdateRequestMapper) {
        return api
            .post('permission.update', $mapper);
    },
    delete($mapper: PermissionDeleteRequestMapper) {
        return api
            .post('permission.delete', $mapper)
    }
}