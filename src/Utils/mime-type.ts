export const isTypeSupport = (mimeType: string): boolean => {
    return MediaRecorder.isTypeSupported(mimeType);
}