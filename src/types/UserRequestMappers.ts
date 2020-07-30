export interface UserInfoRequestMapper {
    identifier: string
}

export interface UserCreateRequestMapper {
    name: string
}

export interface UserUpdateRequestMapper {
    identifier: string,
    name: string
}

export interface UserDeleteRequestMapper {
    identifier: string
}