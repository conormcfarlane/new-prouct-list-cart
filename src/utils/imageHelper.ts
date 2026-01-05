export function getImageUrl(url:string){
    const urlSegment = url.split("/");
    const lastSegment = urlSegment.pop();
    return lastSegment;
}