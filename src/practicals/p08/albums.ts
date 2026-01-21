import axios from "axios";
interface FullAlbum {
    userId: number,
    id: number,
    title: string,
    photos:{}[];
}

const PHOTOS_URL = 'https://jsonplaceholder.typicode.com/photos';
const ALBUMS_URL = 'https://jsonplaceholder.typicode.com/albums';

function mapPhotoToAlbum(userIds?: number[]): Promise<FullAlbum[]>{
    try{
        const res_photos = 
    }
    catch{

    }
}
