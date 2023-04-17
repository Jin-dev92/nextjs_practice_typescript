import {ExternalAPI} from "./APIService";
import {AxiosRequestConfig} from "axios";

export const getMovieList = (config?: AxiosRequestConfig) => ExternalAPI.get('/movie/popular', config)