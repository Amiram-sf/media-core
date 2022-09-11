interface IErrorMessage {
    id: number
    message: string
}

export interface IError {
    Security: IErrorMessage
    RejectPermission: IErrorMessage
    TypeSupport: IErrorMessage
} 