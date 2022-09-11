⚠️⚠️ I will complete this documentation and i'll provide a demo site
⚠️⚠️

# media-core

A Typescript code, based on [MediaRecorder()](https://developer.mozilla.org/en-US/docs/Web/API/MediaRecorder) API to get MediaRecorder.

## Installation

```
npm i media-core
```

OR

```
yarn add media-core
```

## Usage

Recording audio sample.

```
import { IMedia, MediaCore } from 'media-core';

const mediaRecorder: MediaRecorder | null = null;

const getMedia = async (): void => {

    const mediaConfig: IMedia = {
        Constraints: {
            audio: true
        },
        mediaRecorderOptions: {
            mimeType: 'audio/webm'
        }
    }

    try {
        mediaRecorder = await MediaCore(mediaConfig);
    } catch (e) {
        // catch error
    }

}
```

## Fucntion and Interface

**MediaCore**

This function return [MediaRecorder](https://developer.mozilla.org/en-US/docs/Web/API/MediaRecorder), you must pass config that use 
**IMedia** Interface,
if this function can not return MediaRecorder instance it throw an error.

```
interface ErrorMessage {
    id: number
    message: string
}
```

For error id I use enum and I exported it.

```
enum ErrorEnum {
    Security,
    RejectPermission,
    TypeSupport
}
```


**MediaCoreConfig**

You must pass this config to the MediaCore.

```
interface IMedia {
    Constraints: {
        audio?: boolean,
        video?: boolean
    },
    mediaRecorderOptions?: {
        audioBitsPerSecond?: number,
        mimeType: string
    }
}
```

## Contributing

Feel free to submit a PR if you found a bug (I might've missed many! 😀) or if you want to enhance it further.

Thanks!. Happy Recording!