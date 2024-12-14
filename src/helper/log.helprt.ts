export function cl(TAG: string,  ...content: any[]) {
    console.log(new Date(), TAG, ...content)
}
export function errorLog(TAG: string , ...content: any[]) {
    console.error(new Date(), TAG,  ...content)
}
