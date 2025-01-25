import AxiosInstance from "@/services/axios/axiosClient";
import { AxiosRequestConfig, AxiosResponse, Method } from "axios";

interface Options {
	url: string;
	method: Lowercase<Method>;
	axiosConfig: AxiosConfig;
}

type AxiosConfig = Omit<AxiosRequestConfig, "method" | "url">;

const mergeConfig = (axiosConfig?: AxiosRequestConfig): AxiosRequestConfig => {
	return {
		...axiosConfig,
		headers: {
			"Cache-Control": "no-cache",
			...axiosConfig?.headers,
		},
	};
};

const processUrl = (url: string) => {
	return url.includes("https") || url.includes("http")
		? url
		: process.env.NEXT_PUBLIC_API_BASE_URL + url;
};

async function client<T>(options: Options) {
	const { axiosConfig } = options;

	const axiosOptionsInstance: AxiosRequestConfig = {
		...axiosConfig,
		headers: {
			"Cache-Control": "no-cache",
			...axiosConfig?.headers,
		},
	};
	const response = await AxiosInstance<T>(axiosOptionsInstance);
	return response;
}

// Gán các phương thức HTTP của Axios cho client
client.get = <T>(
	url: string,
	config?: AxiosConfig
): Promise<AxiosResponse<T>> => {
	return AxiosInstance.get<T>(processUrl(url), mergeConfig(config));
};

client.post = <T>(
	url: string,
	data?: any,
	config?: AxiosConfig
): Promise<AxiosResponse<T>> => {
	return AxiosInstance.post<T>(processUrl(url), data, mergeConfig(config));
};

client.put = <T>(
	url: string,
	data?: any,
	config?: AxiosConfig
): Promise<AxiosResponse<T>> => {
	return AxiosInstance.put<T>(processUrl(url), data, mergeConfig(config));
};

client.delete = <T>(
	url: string,
	config?: AxiosConfig
): Promise<AxiosResponse<T>> => {
	return AxiosInstance.delete<T>(processUrl(url), mergeConfig(config));
};
export default client;
