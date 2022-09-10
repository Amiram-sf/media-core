import { IError } from "../Models/IError";
import { Error as ErrorEnum } from "../Enums/Error";

export const Error: IError = {
    Security: {
        id: ErrorEnum.Security,
        message: "Security problem"
    },
    RejectPermission: {
        id: ErrorEnum.RejectPermission,
        message: "Request permission rejected"
    },
    TypeSupport: {
        id: ErrorEnum.TypeSupport,
        message: "Type Not Supported"
    }
} 