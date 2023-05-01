const baseUrl = "http://localhost:3001/"

export {baseUrl}

export interface Singer{
    id:string;
    name:string;
    song:string[];
    img_path:string
}