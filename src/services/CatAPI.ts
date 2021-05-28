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
    getCatBreeds: (): Promise<ICatBreed[]> => request.get("v1/breeds"),
    searchCatBreed: (breedId: string): Promise<ICatBreed[]> => request.get(`v1/breeds/search?q=${breedId}`),
    searchBreedImages: (breedId: string): Promise<ICatBreed[]> => request.get(`v1/images/search?breed_id${breedId}&limit=10&format=png`)
}

