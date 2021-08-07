import axios, { AxiosInstance, Method } from 'axios';

export default class ApiService {
  private _instance: AxiosInstance;

  constructor() {
    this._instance = axios.create({
      baseURL: 'http://localhost:3000',
    });
  }

  public async request<T>(method: Method, url: string, data?: any): Promise<T> {
    const resp = await this._instance.request({
      method,
      url,
      data,
    });
    return resp.data;
  }
}
