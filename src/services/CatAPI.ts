import axios, { AxiosResponse } from 'axios';
import { ICatBreed } from '../models/CatBreed'

const instance = axios.create({
    baseURL: "https://api.thecatapi.com/"
});

const responseBody = (response: AxiosResponse) => response.data;

const request = {
    get: (url:string) => instance.get(url).then(responseBody)
}

export const CatAPI = {
    getCatBreeds: (): Promise<any[]> => request.get("v1/breeds"),
    searchBreedImages: (breedId: string, page: number): Promise<any[]> => request.get(`v1/images/search?page=${page}&limit=10&breed_id=${breedId}`)
}

