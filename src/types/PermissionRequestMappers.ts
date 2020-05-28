export interface PermissionInfoRequestMapper {
    identifier: string
}

export interface PermissionCreateRequestMapper {
    name: string
}

export interface PermissionUpdateRequestMapper {
    identifier: string,
    name: string
}

export interface PermissionDeleteRequestMapper {
    identifier: string
}