import { IAudioRecorderOptions } from "./IAudioRecorderOptions"

export interface IMedia {
    Constraints: {
        audio?: boolean,
        video?: boolean
    },
    mediaRecorderOptions?: IAudioRecorderOptions
}