import { debugServer } from "@/config/debug";
import { AxiosError, AxiosRequestConfig } from "axios";

export type Config = RequestInit & {
	params?: Pick<AxiosRequestConfig, "params">;
};

interface Options {
	url: string;
	method: string; // 'GET', 'POST', 'PUT', 'DELETE', etc.
	config?: Config;
}

const mergeConfig = (config?: RequestInit): RequestInit => {
	return {
		...config,
		headers: {
			"Cache-Control": "public, max-age=60",
			...config?.headers,
		},
	};
};

const processUrl = (url: string, config?: Config): string => {
	let result =
		url.includes("https") || url.includes("http")
			? url
			: process.env.NEXT_PUBLIC_API_BASE_URL + url;
	if (config?.params) {
		const params = new URLSearchParams(config.params);
		result += `?${params.toString()}`;
	}
	return result;
};

async function server<T>(options: Options): Promise<T> {
	const { url, method, config } = options;
	const controller = new AbortController();
	const timeoutId = setTimeout(() => controller.abort(), 5000);
	const response = await fetch(processUrl(url, config), {
		method,

		...mergeConfig({ ...config, signal: controller.signal }),
	});

	if (!response.ok) {
		// throw new Error(`HTTP error! status: ${response.status}`);
		let res: any = undefined;
		try {
			res = await response.json();
		} catch (error) {}

		const err: AxiosError = {
			status: response.status,
			response: res,
			message: response.statusText,
			isAxiosError: false,

			toJSON: function (): object {
				return {
					status: response.status,
					message: response.statusText,
					isAxiosError: false,
					data: res,
				};
			},
			name: "",
		};
		throw err;
	}
	const resJson = (await response.json()) as T;
	debugServer(
		response.url,
		resJson,
		response.status,
		response.headers.get("execution-time") || ""
	);
	clearTimeout(timeoutId);

	return resJson;
}

// Assign HTTP methods to the server with TypeScript
server.get = async <T>(url: string, config?: Config): Promise<T> => {
	const response = await server<T>({
		url: url,
		method: "GET",
		config: mergeConfig(config),
	});

	return response;
};

server.post = async <T>(
	url: string,
	data?: any,
	config?: Config
): Promise<T> => {
	const response = await server<T>({
		url: url,
		method: "POST",
		config: {
			...mergeConfig(config),
			body: JSON.stringify(data),
		},
	});
	return response;
};

server.put = async <T>(
	url: string,
	data?: any,
	config?: Config
): Promise<T> => {
	const response = await server<T>({
		url: url,
		method: "PUT",
		config: {
			...mergeConfig(config),
			body: JSON.stringify(data),
		},
	});
	return response;
};

server.delete = async <T>(url: string, config?: RequestInit): Promise<T> => {
	const response = await server<T>({
		url: url,
		method: "DELETE",
		config: mergeConfig(config),
	});
	return response;
};

export default server;
