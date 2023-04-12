import axios, { AxiosRequestConfig } from "axios";
import {LocalAPI} from "./APIService";

export const getProductList = (config?: AxiosRequestConfig<any>) => LocalAPI.get('/api/products', config)
export const getProductById = (config?: AxiosRequestConfig<any>) => LocalAPI.get('/api/products/[id]', config)

