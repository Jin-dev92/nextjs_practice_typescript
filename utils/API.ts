import axios, {AxiosInstance, AxiosRequestConfig, AxiosResponse, CreateAxiosDefaults} from "axios";

export class API {
    private instance: AxiosInstance;
    private response: any;
    private err: any;

    constructor(config: CreateAxiosDefaults<any> | undefined) {
        this.instance = axios.create({...config})
    }

    onSuccess = (res: AxiosResponse) => {
        this.response = res
        return this.response
    };

    onError = (err: { config: any; response: { status: any; data: any; headers: any; }; message: any; }) => {
        this.err = err;
        console.error('Request Failed:', err.config);
        if (err.response) {
            console.error('Status:', err.response.status);
            console.error('Data:', err.response.data);
            console.error('Headers:', err.response.headers);
        } else {
            console.error('Error message:', err.message);
        }
        return Promise.reject(err.response || err.message);
    };

    get(url: string, config?: AxiosRequestConfig<any> | undefined): Promise<AxiosResponse> {
        return this.instance.get(url, config)
            .then(this.onSuccess)
            .catch(this.onError)
    }

    post(url: string, config: AxiosRequestConfig | undefined): Promise<AxiosResponse> {
        return this.instance.post(url, config)
            .then(this.onSuccess)
            .catch(this.onError)
    }

    update(url: string, config: AxiosRequestConfig | undefined): Promise<AxiosResponse> {
        return this.instance.options(url, config)
            .then(this.onSuccess)
            .catch(this.onError)
    }

    delete(url: string, config: AxiosRequestConfig | undefined): Promise<AxiosResponse> {
        return this.instance.delete(url, config)
            .then(this.onSuccess)
            .catch(this.onError)
    }
}