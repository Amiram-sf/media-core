interface ErrorMessage {
    id: number
    message: string
}

export interface IError {
    Security: ErrorMessage
    RejectPermission: ErrorMessage
    TypeSupport: ErrorMessage
} 