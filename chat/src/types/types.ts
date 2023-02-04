export interface IUser {
    name: string
    id: string
}

export interface IMessage {
    message: string
    user: IUser
}