import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

const apiClient = axios.create({
  baseURL: process.env.API_URL, // Assuming categories have a different base URL
  // You can add other default configuration options here
});

// Set your default payload here
let defaultPayload: Record<string, any> = {};

export const setDefaultPayload = (payload: Record<string, any>) => {
    defaultPayload = payload;
};

interface RequestOptions {
  authToken?: string;
  payload?: Record<string, any>;
}

const getDefaultHeaders = (authToken?: string) => {
  const headers: Record<string, string> = {};
  const tokenToUse = authToken || undefined;

  if (tokenToUse) {
    headers['Authorization'] = `Bearer ${tokenToUse}`;
  }
  return headers;
};

const getRequestConfig = ({ authToken, payload }: RequestOptions = {}): AxiosRequestConfig => {
  return {
    headers: { ...getDefaultHeaders(authToken) },
    data: { ...defaultPayload, ...payload },
  };
};

export const login = async <T>(endpoint: string, credentials: any): Promise<T> => {
    try {
       
        const response: AxiosResponse<T> = await apiClient.post(endpoint, credentials);
        if (!response.data) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        return await response.data;
    } catch (error) {
        console.error(`Error logging in:`, error);
        throw error;
    }
};

export const postCategoryData = async <T>(endpoint: string, data: any, options?: RequestOptions): Promise<T> => {
  try {
    const response: AxiosResponse<T> = await apiClient.post(endpoint, data, getRequestConfig(options));
    return response.data;
  } catch (error) {
    console.error(`Error posting data to ${endpoint}:`, error);
    throw error;
  }
};
