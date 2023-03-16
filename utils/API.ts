import axios, {AxiosInstance, AxiosRequestConfig, AxiosResponse, CreateAxiosDefaults} from "axios";

export class API {
    private instance: AxiosInstance;

    constructor(config: CreateAxiosDefaults<any> | undefined) {
        this.instance = axios.create({...config})
    }

    get(url: string, config: AxiosRequestConfig): Promise<AxiosResponse> {
        return axios.get(url, config)
    }

    post(url: string, config: AxiosRequestConfig): Promise<AxiosResponse> {
        return axios.post(url, config)
    }

    update(url: string, config: AxiosRequestConfig): Promise<AxiosResponse> {
        return axios.options(url, config)
    }

    delete(url: string, config: AxiosRequestConfig): Promise<AxiosResponse> {
        return axios.delete(url, config)
    }
}